import * as http from "node:http"
import sirv, { Options } from "sirv"
import { Connect } from "vite"

export function servePublicMiddleware(
  dir: string,
  headers?: http.OutgoingHttpHeaders
): Connect.NextHandleFunction {
  const serve = sirv(dir, sirvOptions(headers))
  return serve
}

function sirvOptions(headers?: http.OutgoingHttpHeaders): Options {
  return {
    dev: true,
    etag: true,
    extensions: [],
    setHeaders(res, pathname) {
      // Matches js, jsx, ts, tsx.
      // The reason this is done, is that the .ts file extension is reserved
      // for the MIME type video/mp2t. In almost all cases, we can expect
      // these files to be TypeScript files, and for Vite to serve them with
      // this Content-Type.
      if (/\.[tj]sx?$/.test(pathname)) {
        res.setHeader("Content-Type", "application/javascript")
      }
      if (headers) {
        for (const name in headers) {
          res.setHeader(name, headers[name]!)
        }
      }
    },
  }
}
