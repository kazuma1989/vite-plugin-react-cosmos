import React from "react";
import { DomFixtureLoader as CosmosDomFixtureLoader } from "./lib";
const cosmos = import.meta.cosmos;
if (!cosmos) {
  throw new Error("You need to apply vite-plugin-react-cosmos in your vite.config");
}
const options = cosmos.options;
function DomFixtureLoader() {
  const { decorators, fixtures } = cosmos.glob;
  return CosmosDomFixtureLoader({
    decorators: Object.fromEntries(Object.entries(decorators).map(([path, exports]) => [
      path,
      exports.default
    ])),
    fixtures: Object.fromEntries(Object.entries(fixtures).map(([path, exports]) => [
      path,
      { module: { default: exports } }
    ]))
  });
}
globalThis.React = React;
export {
  DomFixtureLoader,
  options
};
