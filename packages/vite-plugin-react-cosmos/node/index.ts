import * as fs from "node:fs/promises"
import * as path from "node:path"
import { debuglog } from "node:util"
import { Plugin } from "vite"
import { generateFixtures } from "./generateFixtures"
import { sendContentMiddleware } from "./sendContentMiddleware"
import { servePublicMiddleware } from "./servePublicMiddleware"
import { transformEntryHTML } from "./transformEntryHTML"

const debug = debuglog("vite-plugin-react-cosmos")

export interface Options {
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
  rendererFileName = "cosmos-renderer.html",
  entryFileName = "cosmos.html",
  projectId = "vite-cosmos",
}: Options = {}): Plugin {
  let root: string

  const transform = transformEntryHTML({
    projectId,
    rendererFileName,
  })

  return {
    name: "vite-plugin-react-cosmos",

    config(config) {
      const { root } = config

      debug("user defined entry points", config.build?.rollupOptions?.input)

      const implicitIndexCollision =
        entryFileName === "index.html" && !config.build?.rollupOptions?.input
      if (implicitIndexCollision) {
        // If the plugin will try to emit an index.html and the user did not specify any entry point,
        // keep the user-defined entry point empty to make the index.html alive.
      } else {
        // Otherwise keep user's index.html alive.
        config.build ??= {}
        config.build.rollupOptions ??= {}
        config.build.rollupOptions.input ??= path.resolve(
          root ?? "",
          "index.html"
        )
      }

      const cosmosRenderer = path.resolve(root ?? "", rendererFileName)

      return {
        build: {
          rollupOptions: {
            input: [cosmosRenderer],
          },
        },

        optimizeDeps: {
          include: [
            "react",
            "react-cosmos/dist/dom/DomFixtureLoader.js",
            "react-cosmos/dom",
          ],
          exclude: ["vite-plugin-react-cosmos/client"],
        },

        define: {
          // A fix for ../node_modules/react-cosmos/dist/dom/ErrorCatch.js
          __DEV__: JSON.stringify(false),
        },
      }
    },

    configResolved(config) {
      debug("final entry points", config.build.rollupOptions.input)

      root = config.root
    },

    transform(code: string, id: string) {
      if (
        id.includes("/vite-plugin-react-cosmos/client/index.js") &&
        code.includes("import.meta.cosmos.")
      ) {
        const options: Required<Options> = {
          decoratorsGlob,
          fixturesGlob,
          fixturesJSONFileName,
          rendererFileName,
          entryFileName,
          projectId,
        }

        return {
          code: code
            .replaceAll("import.meta.cosmos.options", JSON.stringify(options))
            .replaceAll(
              "import.meta.cosmos.globEager",
              "{" +
                [
                  `decorators: import.meta.globEager(${JSON.stringify(
                    decoratorsGlob
                  )})`,
                  `fixtures: import.meta.globEager(${JSON.stringify(
                    fixturesGlob
                  )})`,
                ].join(",") +
                "}"
            ),
        }
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
          servePublicMiddleware(resolve("../public/"), config.server.headers)
        )
      }
    },
  }
}

function resolve(segment: "../public/" | "../public/index.html"): string {
  return path.resolve(__dirname, segment)
}
