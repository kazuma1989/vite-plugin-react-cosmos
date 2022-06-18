const queryRE = /\?.*$/s
const hashRE = /#.*$/s

export function cleanUrl(url: string): string {
  return url.replace(hashRE, "").replace(queryRE, "")
}
