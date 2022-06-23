import React from "react"
import { Options } from "../node"
import { DomFixtureLoader as CosmosDomFixtureLoader } from "./lib"

interface ImportMeta {
  cosmos: {
    options: Required<Options>
    glob: {
      decorators: Record<string, { [key: string]: any }>
      fixtures: Record<string, { [key: string]: any }>
    }
  }
}

const cosmos = (import.meta as unknown as ImportMeta).cosmos
if (!cosmos) {
  throw new Error(
    "You need to apply vite-plugin-react-cosmos in your vite.config"
  )
}

export const options = cosmos.options

export function DomFixtureLoader() {
  const { decorators, fixtures } = cosmos.glob

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
