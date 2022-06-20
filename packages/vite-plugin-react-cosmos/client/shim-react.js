import React from "react"

globalThis.require = (target) => {
  if (target === "react") {
    return React
  }

  throw new Error(`Dynamic require of "${target}" is not supported`)
}
