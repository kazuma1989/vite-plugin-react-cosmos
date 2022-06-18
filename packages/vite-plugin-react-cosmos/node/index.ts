import * as fs from "node:fs/promises"
import * as path from "node:path"
import { Plugin } from "vite"
import { generateFixtures } from "./generateFixtures"
import { sendContentMiddleware } from "./sendContentMiddleware"
import { servePublicMiddleware } from "./servePublicMiddleware"
import { transformEntryHTML } from "./transformEntryHTML"

interface Config {
  decoratorsGlob?: string
  fixturesGlob?: string
  fixturesJSONFileName?: string
  rendererFileName?: string
  entryFileName?: string
  projectId?: string
}

export default function cosmos({
  decoratorsGlob = "/src/**/*.decorator.tsx",
  fixturesGlob = "/src/**/*.stories.tsx",
  fixturesJSONFileName = "fixtures.json",
  rendererFileName = "catalog.html",
  entryFileName = "index.html",
  projectId = "vite-cosmos",
}: Config = {}): Plugin {
  let root: string

  const transform = transformEntryHTML({
    projectId,
    rendererFileName,
  })

  return {
    name: "vite-plugin-react-cosmos",

    config({ root }) {
      return {
        build: {
          rollupOptions: {
            input: path.resolve(root ?? "", rendererFileName),
          },
        },

        define: {
          // A fix for ../node_modules/react-cosmos/dist/dom/ErrorCatch.js
          __DEV__: JSON.stringify(false),
        },
      }
    },

    configResolved(config) {
      root = config.root
    },

    resolveId(id) {
      if (id === "virtual:cosmos/globs") {
        return "\0" + "virtual:cosmos/globs"
      }
    },

    load(id) {
      if (id === "\0" + "virtual:cosmos/globs") {
        const decoratorsLiteral = JSON.stringify(decoratorsGlob)
        const fixturesLiteral = JSON.stringify(fixturesGlob)
        const filenameLiteral = JSON.stringify(fixturesJSONFileName)

        return [
          `export const decoratorsImport = import.meta.globEager(${decoratorsLiteral})`,
          `export const fixturesImport = import.meta.globEager(${fixturesLiteral})`,
          `export const decoratorsGlob = ${decoratorsLiteral}`,
          `export const fixturesGlob = ${fixturesLiteral}`,
          `export const fixturesJSONFileName = ${filenameLiteral}`,
        ].join("\n")
      }
    },

    async generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: fixturesJSONFileName,
        source: await generateFixtures(fixturesGlob, root).then(JSON.stringify),
      })

      this.emitFile({
        type: "asset",
        fileName: entryFileName,
        source: await fs
          .readFile(resolve("../public/index.html"), "utf-8")
          .then(transform),
      })

      const publicDir = resolve("../public/")

      await fs.readdir(publicDir).then((files) =>
        Promise.all(
          files.map(async (fileName) => {
            if (
              path.resolve(publicDir, fileName) ===
              resolve("../public/index.html")
            )
              return

            this.emitFile({
              type: "asset",
              fileName,
              source: await fs.readFile(path.resolve(publicDir, fileName)),
            })
          })
        )
      )
    },

    configureServer(server) {
      return () => {
        const { middlewares, config } = server

        middlewares.use(
          "/" + entryFileName,
          sendContentMiddleware(
            "html",
            () =>
              fs
                .readFile(resolve("../public/index.html"), "utf-8")
                .then(transform),
            config.server.headers
          )
        )

        middlewares.use(
          "/" + fixturesJSONFileName,
          sendContentMiddleware(
            "json",
            () => generateFixtures(fixturesGlob, root).then(JSON.stringify),
            config.server.headers
          )
        )

        middlewares.use(
          "/index.html",
          function hideIndexHTMLMiddleware(_, res) {
            res.statusCode = 404
            res.end()
          }
        )

        middlewares.use(
          servePublicMiddleware(resolve("../public/"), config.server.headers)
        )
      }
    },
  }
}

function resolve(segment: "../public/" | "../public/index.html"): string {
  return path.resolve(__dirname, segment)
}
