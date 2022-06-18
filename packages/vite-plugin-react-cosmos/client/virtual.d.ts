declare module "virtual:cosmos/globs" {
  const decoratorsImport: Record<string, { [key: string]: any }>
  const fixturesImport: Record<string, { [key: string]: any }>

  const decoratorsGlob: string
  const fixturesGlob: string

  const fixturesJSONFileName: string
}
