import React from "react"
import { DomFixtureLoader as CosmosDomFixtureLoader } from "react-cosmos/dist/dom/DomFixtureLoader.js"
import "react-cosmos/dom" // polyfill "regenerator-runtime"

interface ImportMeta {
  cosmos: {
    options: Required<import("../node/index").Options>
    globEager: {
      decorators: Record<string, { [key: string]: any }>
      fixtures: Record<string, { [key: string]: any }>
    }
  }
}

export const options = (import.meta as unknown as ImportMeta).cosmos.options

export function DomFixtureLoader() {
  const { decorators, fixtures } = (import.meta as unknown as ImportMeta).cosmos
    .globEager

  return CosmosDomFixtureLoader({
    /**
     * @example
     * {
     *   "/src/cosmos.decorator.tsx": ...,
     * }
     */
    decorators: Object.fromEntries(
      Object.entries(decorators).map(([path, exports]) => [
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
      Object.entries(fixtures).map(([path, exports]) => [
        path,
        { module: { default: exports } },
      ])
    ),
  })
}

// Required when vite build
globalThis.React = React
