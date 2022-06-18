interface Config {
  playgroundConfig: {
    core: {
      projectId: string
      fixturesDir: string
      fixtureFileSuffix: string
      devServerOn: boolean
      webRendererUrl: string
    }
  }

  pluginConfigs: unknown[]
}

interface Option {
  projectId: string
  rendererFileName: string
}

export function transformEntryHTML({
  projectId,
  rendererFileName,
}: Option): (source: string) => string {
  return (source) => {
    const config = parse(source)
    if (!config) {
      // return as-is
      return source
    }

    config.playgroundConfig.core.projectId = projectId
    config.playgroundConfig.core.webRendererUrl = rendererFileName

    return rewrite(source, config)
  }
}

const mountPlaygroundRE = /(?<=\bmountPlayground\().*(?=\))/g

function parse(source: string): Config | undefined {
  const [config] = source.match(mountPlaygroundRE) ?? []
  if (!config) return

  return JSON.parse(config)
}

function rewrite(source: string, config: Config): string {
  return source.replaceAll(mountPlaygroundRE, JSON.stringify(config))
}
