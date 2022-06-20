import { Plugin } from "vite";
export interface Options {
    decoratorsGlob?: string;
    fixturesGlob?: string;
    fixturesJSONFileName?: string;
    rendererFileName?: string;
    entryFileName?: string;
    projectId?: string;
}
export default function cosmos({ decoratorsGlob, fixturesGlob, fixturesJSONFileName, rendererFileName, entryFileName, projectId, }?: Options): Plugin;
