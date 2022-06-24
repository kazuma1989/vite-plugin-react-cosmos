#!/usr/bin/env node

// @ts-check
import { build } from "esbuild"

const [rawWatch] = process.argv.slice(2)
const watch = !!rawWatch

if (watch) {
  console.log("watch mode")
}

await Promise.allSettled([
  build({
    entryPoints: ["./client/index.ts"],
    outfile: "./client/index.js",
    platform: "browser",
    format: "esm",
    bundle: false,
    watch: watch
      ? {
          onRebuild() {
            console.log("rebuild client")
          },
        }
      : false,
  }),

  build({
    entryPoints: ["./client/lib.ts"],
    outfile: "./client/lib.js",
    platform: "browser",
    format: "esm",
    bundle: true,
    external: ["react"],
    inject: ["./client/shim-react.js"],
    minify: true,
    watch: watch
      ? {
          onRebuild() {
            console.log("rebuild lib")
          },
        }
      : false,
  }),

  build({
    entryPoints: ["./node/index.ts"],
    outfile: "./node/index.cjs",
    platform: "node",
    format: "cjs",
    bundle: true,
    external: ["es-module-lexer", "fast-glob", "vite"],
    watch: watch
      ? {
          onRebuild() {
            console.log("rebuild node")
          },
        }
      : false,
  }),
])
