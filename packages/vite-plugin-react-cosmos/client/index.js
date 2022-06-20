import React from "react";
import { DomFixtureLoader as CosmosDomFixtureLoader } from "react-cosmos/dist/dom/DomFixtureLoader.js";
import "react-cosmos/dom";
const options = import.meta.cosmos.options;
function DomFixtureLoader() {
  const { decorators, fixtures } = import.meta.cosmos.globEager;
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
