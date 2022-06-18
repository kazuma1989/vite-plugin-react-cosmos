/// <reference path="./virtual.d.ts" />

import React from "react"
import { DomFixtureLoader as CosmosDomFixtureLoader } from "react-cosmos/dist/dom/DomFixtureLoader.js"
import "react-cosmos/dom" // polyfill "regenerator-runtime"
import { decoratorsImport, fixturesImport } from "virtual:cosmos/globs"

export * from "virtual:cosmos/globs"

export function DomFixtureLoader() {
  return CosmosDomFixtureLoader({
    /**
     * @example
     * {
     *   "/src/cosmos.decorator.tsx": ...,
     * }
     */
    decorators: Object.fromEntries(
      Object.entries(decoratorsImport).map(([path, exports]) => [
        path,
        exports.default,
      ])
    ),

    /**
     * @example
     * {
     *   "/src/Button.stories.tsx": ...,
     *   "/src/colors.stories.tsx": ...,
     * }
     */
    fixtures: Object.fromEntries(
      Object.entries(fixturesImport).map(([path, exports]) => [
        path,
        { module: { default: exports } },
      ])
    ),
  })
}

// Required when vite build
globalThis.React = React
