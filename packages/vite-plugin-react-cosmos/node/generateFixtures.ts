import glob from "fast-glob"
import * as fs from "node:fs/promises"
import { transformWithEsbuild } from "vite"

export async function generateFixtures(
  fixturesGlob: string,
  basedir: string
): Promise<{ path: string; name: string }[]> {
  const { init, parse } = await import("es-module-lexer")

  await init

  /**
   * @example
   * [
   *   "/Users/kazuma/work/catalog/src/Button.stories.tsx",
   *   "/Users/kazuma/work/catalog/src/icon.stories.tsx",
   *   ...
   * ]
   */
  const absolutePaths = await glob("./" + fixturesGlob, {
    cwd: basedir,
    ignore: ["**/node_modules/**"],
    absolute: true,
  })

  /**
   * @example
   * [
   *   { "path": "/src/Audio.stories.tsx", "name": "Button_with_icon" },
   *   { "path": "/src/Audio.stories.tsx", "name": "Button_with_label" },
   *   { "path": "/src/Button.stories.tsx", "name": "Button" },
   *   { "path": "/src/Button.stories.tsx", "name": "Link" },
   *   ...
   * ]
   */
  const fixtures = await Promise.allSettled(
    absolutePaths
      .filter((absPath) => absPath.startsWith(basedir))
      .map(async (absPath): Promise<{ path: string; name: string }[]> => {
        const tsStripped = await fs
          .readFile(absPath, "utf8")
          .then((code) =>
            transformWithEsbuild(code, absPath, { charset: "utf8" })
          )

        const [, exports] = parse(tsStripped.code)

        const path = absPath.slice(basedir.length)

        return exports.map((name) => ({ path, name }))
      })
  ).then((e) => e.flatMap((r) => (r.status === "fulfilled" ? r.value : [])))

  return fixtures
}
