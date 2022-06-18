import * as http from "node:http"
import { Connect, send } from "vite"
import { cleanUrl } from "./cleanUrl"

export function sendContentMiddleware(
  type: string,
  content: () => string | PromiseLike<string>,
  headers?: http.OutgoingHttpHeaders
): Connect.NextHandleFunction {
  return async function sendContentMiddleware(req, res, next) {
    const url = req.url && cleanUrl(req.url)
    if (url !== "/") {
      next()
      return
    }

    try {
      send(req, res, await content(), type, { headers })
    } catch (e) {
      next(e)
    }
  }
}
