var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/totalist@3.0.0/node_modules/totalist/sync/index.js
var require_sync = __commonJS({
  "../../node_modules/.pnpm/totalist@3.0.0/node_modules/totalist/sync/index.js"(exports) {
    var { join, resolve: resolve3 } = require("path");
    var { readdirSync, statSync } = require("fs");
    function totalist(dir, callback, pre = "") {
      dir = resolve3(".", dir);
      let arr = readdirSync(dir);
      let i = 0, abs, stats;
      for (; i < arr.length; i++) {
        abs = join(dir, arr[i]);
        stats = statSync(abs);
        stats.isDirectory() ? totalist(abs, callback, join(pre, arr[i])) : callback(join(pre, arr[i]), abs, stats);
      }
    }
    exports.totalist = totalist;
  }
});

// ../../node_modules/.pnpm/@polka+url@1.0.0-next.21/node_modules/@polka/url/build.js
var require_build = __commonJS({
  "../../node_modules/.pnpm/@polka+url@1.0.0-next.21/node_modules/@polka/url/build.js"(exports) {
    var qs = require("querystring");
    function parse2(req) {
      let raw = req.url;
      if (raw == null)
        return;
      let prev = req._parsedUrl;
      if (prev && prev.raw === raw)
        return prev;
      let pathname = raw, search = "", query;
      if (raw.length > 1) {
        let idx = raw.indexOf("?", 1);
        if (idx !== -1) {
          search = raw.substring(idx);
          pathname = raw.substring(0, idx);
          if (search.length > 1) {
            query = qs.parse(search.substring(1));
          }
        }
      }
      return req._parsedUrl = { pathname, search, query, raw };
    }
    exports.parse = parse2;
  }
});

// ../../node_modules/.pnpm/mrmime@1.0.1/node_modules/mrmime/index.js
var require_mrmime = __commonJS({
  "../../node_modules/.pnpm/mrmime@1.0.1/node_modules/mrmime/index.js"(exports) {
    var mimes = {
      "ez": "application/andrew-inset",
      "aw": "application/applixware",
      "atom": "application/atom+xml",
      "atomcat": "application/atomcat+xml",
      "atomdeleted": "application/atomdeleted+xml",
      "atomsvc": "application/atomsvc+xml",
      "dwd": "application/atsc-dwd+xml",
      "held": "application/atsc-held+xml",
      "rsat": "application/atsc-rsat+xml",
      "bdoc": "application/bdoc",
      "xcs": "application/calendar+xml",
      "ccxml": "application/ccxml+xml",
      "cdfx": "application/cdfx+xml",
      "cdmia": "application/cdmi-capability",
      "cdmic": "application/cdmi-container",
      "cdmid": "application/cdmi-domain",
      "cdmio": "application/cdmi-object",
      "cdmiq": "application/cdmi-queue",
      "cu": "application/cu-seeme",
      "mpd": "application/dash+xml",
      "davmount": "application/davmount+xml",
      "dbk": "application/docbook+xml",
      "dssc": "application/dssc+der",
      "xdssc": "application/dssc+xml",
      "es": "application/ecmascript",
      "ecma": "application/ecmascript",
      "emma": "application/emma+xml",
      "emotionml": "application/emotionml+xml",
      "epub": "application/epub+zip",
      "exi": "application/exi",
      "fdt": "application/fdt+xml",
      "pfr": "application/font-tdpfr",
      "geojson": "application/geo+json",
      "gml": "application/gml+xml",
      "gpx": "application/gpx+xml",
      "gxf": "application/gxf",
      "gz": "application/gzip",
      "hjson": "application/hjson",
      "stk": "application/hyperstudio",
      "ink": "application/inkml+xml",
      "inkml": "application/inkml+xml",
      "ipfix": "application/ipfix",
      "its": "application/its+xml",
      "jar": "application/java-archive",
      "war": "application/java-archive",
      "ear": "application/java-archive",
      "ser": "application/java-serialized-object",
      "class": "application/java-vm",
      "js": "application/javascript",
      "mjs": "application/javascript",
      "json": "application/json",
      "map": "application/json",
      "json5": "application/json5",
      "jsonml": "application/jsonml+json",
      "jsonld": "application/ld+json",
      "lgr": "application/lgr+xml",
      "lostxml": "application/lost+xml",
      "hqx": "application/mac-binhex40",
      "cpt": "application/mac-compactpro",
      "mads": "application/mads+xml",
      "webmanifest": "application/manifest+json",
      "mrc": "application/marc",
      "mrcx": "application/marcxml+xml",
      "ma": "application/mathematica",
      "nb": "application/mathematica",
      "mb": "application/mathematica",
      "mathml": "application/mathml+xml",
      "mbox": "application/mbox",
      "mscml": "application/mediaservercontrol+xml",
      "metalink": "application/metalink+xml",
      "meta4": "application/metalink4+xml",
      "mets": "application/mets+xml",
      "maei": "application/mmt-aei+xml",
      "musd": "application/mmt-usd+xml",
      "mods": "application/mods+xml",
      "m21": "application/mp21",
      "mp21": "application/mp21",
      "mp4s": "application/mp4",
      "m4p": "application/mp4",
      "doc": "application/msword",
      "dot": "application/msword",
      "mxf": "application/mxf",
      "nq": "application/n-quads",
      "nt": "application/n-triples",
      "cjs": "application/node",
      "bin": "application/octet-stream",
      "dms": "application/octet-stream",
      "lrf": "application/octet-stream",
      "mar": "application/octet-stream",
      "so": "application/octet-stream",
      "dist": "application/octet-stream",
      "distz": "application/octet-stream",
      "pkg": "application/octet-stream",
      "bpk": "application/octet-stream",
      "dump": "application/octet-stream",
      "elc": "application/octet-stream",
      "deploy": "application/octet-stream",
      "exe": "application/octet-stream",
      "dll": "application/octet-stream",
      "deb": "application/octet-stream",
      "dmg": "application/octet-stream",
      "iso": "application/octet-stream",
      "img": "application/octet-stream",
      "msi": "application/octet-stream",
      "msp": "application/octet-stream",
      "msm": "application/octet-stream",
      "buffer": "application/octet-stream",
      "oda": "application/oda",
      "opf": "application/oebps-package+xml",
      "ogx": "application/ogg",
      "omdoc": "application/omdoc+xml",
      "onetoc": "application/onenote",
      "onetoc2": "application/onenote",
      "onetmp": "application/onenote",
      "onepkg": "application/onenote",
      "oxps": "application/oxps",
      "relo": "application/p2p-overlay+xml",
      "xer": "application/patch-ops-error+xml",
      "pdf": "application/pdf",
      "pgp": "application/pgp-encrypted",
      "asc": "application/pgp-signature",
      "sig": "application/pgp-signature",
      "prf": "application/pics-rules",
      "p10": "application/pkcs10",
      "p7m": "application/pkcs7-mime",
      "p7c": "application/pkcs7-mime",
      "p7s": "application/pkcs7-signature",
      "p8": "application/pkcs8",
      "ac": "application/pkix-attr-cert",
      "cer": "application/pkix-cert",
      "crl": "application/pkix-crl",
      "pkipath": "application/pkix-pkipath",
      "pki": "application/pkixcmp",
      "pls": "application/pls+xml",
      "ai": "application/postscript",
      "eps": "application/postscript",
      "ps": "application/postscript",
      "provx": "application/provenance+xml",
      "cww": "application/prs.cww",
      "pskcxml": "application/pskc+xml",
      "raml": "application/raml+yaml",
      "rdf": "application/rdf+xml",
      "owl": "application/rdf+xml",
      "rif": "application/reginfo+xml",
      "rnc": "application/relax-ng-compact-syntax",
      "rl": "application/resource-lists+xml",
      "rld": "application/resource-lists-diff+xml",
      "rs": "application/rls-services+xml",
      "rapd": "application/route-apd+xml",
      "sls": "application/route-s-tsid+xml",
      "rusd": "application/route-usd+xml",
      "gbr": "application/rpki-ghostbusters",
      "mft": "application/rpki-manifest",
      "roa": "application/rpki-roa",
      "rsd": "application/rsd+xml",
      "rss": "application/rss+xml",
      "rtf": "application/rtf",
      "sbml": "application/sbml+xml",
      "scq": "application/scvp-cv-request",
      "scs": "application/scvp-cv-response",
      "spq": "application/scvp-vp-request",
      "spp": "application/scvp-vp-response",
      "sdp": "application/sdp",
      "senmlx": "application/senml+xml",
      "sensmlx": "application/sensml+xml",
      "setpay": "application/set-payment-initiation",
      "setreg": "application/set-registration-initiation",
      "shf": "application/shf+xml",
      "siv": "application/sieve",
      "sieve": "application/sieve",
      "smi": "application/smil+xml",
      "smil": "application/smil+xml",
      "rq": "application/sparql-query",
      "srx": "application/sparql-results+xml",
      "gram": "application/srgs",
      "grxml": "application/srgs+xml",
      "sru": "application/sru+xml",
      "ssdl": "application/ssdl+xml",
      "ssml": "application/ssml+xml",
      "swidtag": "application/swid+xml",
      "tei": "application/tei+xml",
      "teicorpus": "application/tei+xml",
      "tfi": "application/thraud+xml",
      "tsd": "application/timestamped-data",
      "toml": "application/toml",
      "trig": "application/trig",
      "ttml": "application/ttml+xml",
      "ubj": "application/ubjson",
      "rsheet": "application/urc-ressheet+xml",
      "td": "application/urc-targetdesc+xml",
      "vxml": "application/voicexml+xml",
      "wasm": "application/wasm",
      "wgt": "application/widget",
      "hlp": "application/winhlp",
      "wsdl": "application/wsdl+xml",
      "wspolicy": "application/wspolicy+xml",
      "xaml": "application/xaml+xml",
      "xav": "application/xcap-att+xml",
      "xca": "application/xcap-caps+xml",
      "xdf": "application/xcap-diff+xml",
      "xel": "application/xcap-el+xml",
      "xns": "application/xcap-ns+xml",
      "xenc": "application/xenc+xml",
      "xhtml": "application/xhtml+xml",
      "xht": "application/xhtml+xml",
      "xlf": "application/xliff+xml",
      "xml": "application/xml",
      "xsl": "application/xml",
      "xsd": "application/xml",
      "rng": "application/xml",
      "dtd": "application/xml-dtd",
      "xop": "application/xop+xml",
      "xpl": "application/xproc+xml",
      "xslt": "application/xml",
      "xspf": "application/xspf+xml",
      "mxml": "application/xv+xml",
      "xhvml": "application/xv+xml",
      "xvml": "application/xv+xml",
      "xvm": "application/xv+xml",
      "yang": "application/yang",
      "yin": "application/yin+xml",
      "zip": "application/zip",
      "3gpp": "video/3gpp",
      "adp": "audio/adpcm",
      "amr": "audio/amr",
      "au": "audio/basic",
      "snd": "audio/basic",
      "mid": "audio/midi",
      "midi": "audio/midi",
      "kar": "audio/midi",
      "rmi": "audio/midi",
      "mxmf": "audio/mobile-xmf",
      "mp3": "audio/mpeg",
      "m4a": "audio/mp4",
      "mp4a": "audio/mp4",
      "mpga": "audio/mpeg",
      "mp2": "audio/mpeg",
      "mp2a": "audio/mpeg",
      "m2a": "audio/mpeg",
      "m3a": "audio/mpeg",
      "oga": "audio/ogg",
      "ogg": "audio/ogg",
      "spx": "audio/ogg",
      "opus": "audio/ogg",
      "s3m": "audio/s3m",
      "sil": "audio/silk",
      "wav": "audio/wav",
      "weba": "audio/webm",
      "xm": "audio/xm",
      "ttc": "font/collection",
      "otf": "font/otf",
      "ttf": "font/ttf",
      "woff": "font/woff",
      "woff2": "font/woff2",
      "exr": "image/aces",
      "apng": "image/apng",
      "avif": "image/avif",
      "bmp": "image/bmp",
      "cgm": "image/cgm",
      "drle": "image/dicom-rle",
      "emf": "image/emf",
      "fits": "image/fits",
      "g3": "image/g3fax",
      "gif": "image/gif",
      "heic": "image/heic",
      "heics": "image/heic-sequence",
      "heif": "image/heif",
      "heifs": "image/heif-sequence",
      "hej2": "image/hej2k",
      "hsj2": "image/hsj2",
      "ief": "image/ief",
      "jls": "image/jls",
      "jp2": "image/jp2",
      "jpg2": "image/jp2",
      "jpeg": "image/jpeg",
      "jpg": "image/jpeg",
      "jpe": "image/jpeg",
      "jph": "image/jph",
      "jhc": "image/jphc",
      "jpm": "image/jpm",
      "jpx": "image/jpx",
      "jpf": "image/jpx",
      "jxr": "image/jxr",
      "jxra": "image/jxra",
      "jxrs": "image/jxrs",
      "jxs": "image/jxs",
      "jxsc": "image/jxsc",
      "jxsi": "image/jxsi",
      "jxss": "image/jxss",
      "ktx": "image/ktx",
      "ktx2": "image/ktx2",
      "png": "image/png",
      "btif": "image/prs.btif",
      "pti": "image/prs.pti",
      "sgi": "image/sgi",
      "svg": "image/svg+xml",
      "svgz": "image/svg+xml",
      "t38": "image/t38",
      "tif": "image/tiff",
      "tiff": "image/tiff",
      "tfx": "image/tiff-fx",
      "webp": "image/webp",
      "wmf": "image/wmf",
      "disposition-notification": "message/disposition-notification",
      "u8msg": "message/global",
      "u8dsn": "message/global-delivery-status",
      "u8mdn": "message/global-disposition-notification",
      "u8hdr": "message/global-headers",
      "eml": "message/rfc822",
      "mime": "message/rfc822",
      "3mf": "model/3mf",
      "gltf": "model/gltf+json",
      "glb": "model/gltf-binary",
      "igs": "model/iges",
      "iges": "model/iges",
      "msh": "model/mesh",
      "mesh": "model/mesh",
      "silo": "model/mesh",
      "mtl": "model/mtl",
      "obj": "model/obj",
      "stpz": "model/step+zip",
      "stpxz": "model/step-xml+zip",
      "stl": "model/stl",
      "wrl": "model/vrml",
      "vrml": "model/vrml",
      "x3db": "model/x3d+fastinfoset",
      "x3dbz": "model/x3d+binary",
      "x3dv": "model/x3d-vrml",
      "x3dvz": "model/x3d+vrml",
      "x3d": "model/x3d+xml",
      "x3dz": "model/x3d+xml",
      "appcache": "text/cache-manifest",
      "manifest": "text/cache-manifest",
      "ics": "text/calendar",
      "ifb": "text/calendar",
      "coffee": "text/coffeescript",
      "litcoffee": "text/coffeescript",
      "css": "text/css",
      "csv": "text/csv",
      "html": "text/html",
      "htm": "text/html",
      "shtml": "text/html",
      "jade": "text/jade",
      "jsx": "text/jsx",
      "less": "text/less",
      "markdown": "text/markdown",
      "md": "text/markdown",
      "mml": "text/mathml",
      "mdx": "text/mdx",
      "n3": "text/n3",
      "txt": "text/plain",
      "text": "text/plain",
      "conf": "text/plain",
      "def": "text/plain",
      "list": "text/plain",
      "log": "text/plain",
      "in": "text/plain",
      "ini": "text/plain",
      "dsc": "text/prs.lines.tag",
      "rtx": "text/richtext",
      "sgml": "text/sgml",
      "sgm": "text/sgml",
      "shex": "text/shex",
      "slim": "text/slim",
      "slm": "text/slim",
      "spdx": "text/spdx",
      "stylus": "text/stylus",
      "styl": "text/stylus",
      "tsv": "text/tab-separated-values",
      "t": "text/troff",
      "tr": "text/troff",
      "roff": "text/troff",
      "man": "text/troff",
      "me": "text/troff",
      "ms": "text/troff",
      "ttl": "text/turtle",
      "uri": "text/uri-list",
      "uris": "text/uri-list",
      "urls": "text/uri-list",
      "vcard": "text/vcard",
      "vtt": "text/vtt",
      "yaml": "text/yaml",
      "yml": "text/yaml",
      "3gp": "video/3gpp",
      "3g2": "video/3gpp2",
      "h261": "video/h261",
      "h263": "video/h263",
      "h264": "video/h264",
      "m4s": "video/iso.segment",
      "jpgv": "video/jpeg",
      "jpgm": "image/jpm",
      "mj2": "video/mj2",
      "mjp2": "video/mj2",
      "ts": "video/mp2t",
      "mp4": "video/mp4",
      "mp4v": "video/mp4",
      "mpg4": "video/mp4",
      "mpeg": "video/mpeg",
      "mpg": "video/mpeg",
      "mpe": "video/mpeg",
      "m1v": "video/mpeg",
      "m2v": "video/mpeg",
      "ogv": "video/ogg",
      "qt": "video/quicktime",
      "mov": "video/quicktime",
      "webm": "video/webm"
    };
    function lookup(extn) {
      let tmp = ("" + extn).trim().toLowerCase();
      let idx = tmp.lastIndexOf(".");
      return mimes[!~idx ? tmp : tmp.substring(++idx)];
    }
    exports.lookup = lookup;
    exports.mimes = mimes;
  }
});

// ../../node_modules/.pnpm/sirv@2.0.2/node_modules/sirv/build.js
var require_build2 = __commonJS({
  "../../node_modules/.pnpm/sirv@2.0.2/node_modules/sirv/build.js"(exports, module2) {
    var fs3 = require("fs");
    var { join, normalize, resolve: resolve3 } = require("path");
    var { totalist } = require_sync();
    var { parse: parse2 } = require_build();
    var { lookup } = require_mrmime();
    var noop = () => {
    };
    function isMatch(uri, arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].test(uri))
          return true;
      }
    }
    function toAssume(uri, extns) {
      let i = 0, x, len = uri.length - 1;
      if (uri.charCodeAt(len) === 47) {
        uri = uri.substring(0, len);
      }
      let arr = [], tmp = `${uri}/index`;
      for (; i < extns.length; i++) {
        x = extns[i] ? `.${extns[i]}` : "";
        if (uri)
          arr.push(uri + x);
        arr.push(tmp + x);
      }
      return arr;
    }
    function viaCache(cache, uri, extns) {
      let i = 0, data, arr = toAssume(uri, extns);
      for (; i < arr.length; i++) {
        if (data = cache[arr[i]])
          return data;
      }
    }
    function viaLocal(dir, isEtag, uri, extns) {
      let i = 0, arr = toAssume(uri, extns);
      let abs, stats, name, headers;
      for (; i < arr.length; i++) {
        abs = normalize(join(dir, name = arr[i]));
        if (abs.startsWith(dir) && fs3.existsSync(abs)) {
          stats = fs3.statSync(abs);
          if (stats.isDirectory())
            continue;
          headers = toHeaders(name, stats, isEtag);
          headers["Cache-Control"] = isEtag ? "no-cache" : "no-store";
          return { abs, stats, headers };
        }
      }
    }
    function is404(req, res) {
      return res.statusCode = 404, res.end();
    }
    function send2(req, res, file, stats, headers) {
      let code = 200, tmp, opts = {};
      headers = { ...headers };
      for (let key in headers) {
        tmp = res.getHeader(key);
        if (tmp)
          headers[key] = tmp;
      }
      if (tmp = res.getHeader("content-type")) {
        headers["Content-Type"] = tmp;
      }
      if (req.headers.range) {
        code = 206;
        let [x, y] = req.headers.range.replace("bytes=", "").split("-");
        let end = opts.end = parseInt(y, 10) || stats.size - 1;
        let start = opts.start = parseInt(x, 10) || 0;
        if (start >= stats.size || end >= stats.size) {
          res.setHeader("Content-Range", `bytes */${stats.size}`);
          res.statusCode = 416;
          return res.end();
        }
        headers["Content-Range"] = `bytes ${start}-${end}/${stats.size}`;
        headers["Content-Length"] = end - start + 1;
        headers["Accept-Ranges"] = "bytes";
      }
      res.writeHead(code, headers);
      fs3.createReadStream(file, opts).pipe(res);
    }
    var ENCODING = {
      ".br": "br",
      ".gz": "gzip"
    };
    function toHeaders(name, stats, isEtag) {
      let enc = ENCODING[name.slice(-3)];
      let ctype = lookup(name.slice(0, enc && -3)) || "";
      if (ctype === "text/html")
        ctype += ";charset=utf-8";
      let headers = {
        "Content-Length": stats.size,
        "Content-Type": ctype,
        "Last-Modified": stats.mtime.toUTCString()
      };
      if (enc)
        headers["Content-Encoding"] = enc;
      if (isEtag)
        headers["ETag"] = `W/"${stats.size}-${stats.mtime.getTime()}"`;
      return headers;
    }
    module2.exports = function(dir, opts = {}) {
      dir = resolve3(dir || ".");
      let isNotFound = opts.onNoMatch || is404;
      let setHeaders = opts.setHeaders || noop;
      let extensions = opts.extensions || ["html", "htm"];
      let gzips = opts.gzip && extensions.map((x) => `${x}.gz`).concat("gz");
      let brots = opts.brotli && extensions.map((x) => `${x}.br`).concat("br");
      const FILES = {};
      let fallback = "/";
      let isEtag = !!opts.etag;
      let isSPA = !!opts.single;
      if (typeof opts.single === "string") {
        let idx = opts.single.lastIndexOf(".");
        fallback += !!~idx ? opts.single.substring(0, idx) : opts.single;
      }
      let ignores = [];
      if (opts.ignores !== false) {
        ignores.push(/[/]([A-Za-z\s\d~$._-]+\.\w+){1,}$/);
        if (opts.dotfiles)
          ignores.push(/\/\.\w/);
        else
          ignores.push(/\/\.well-known/);
        [].concat(opts.ignores || []).forEach((x) => {
          ignores.push(new RegExp(x, "i"));
        });
      }
      let cc = opts.maxAge != null && `public,max-age=${opts.maxAge}`;
      if (cc && opts.immutable)
        cc += ",immutable";
      else if (cc && opts.maxAge === 0)
        cc += ",must-revalidate";
      if (!opts.dev) {
        totalist(dir, (name, abs, stats) => {
          if (/\.well-known[\\+\/]/.test(name)) {
          } else if (!opts.dotfiles && /(^\.|[\\+|\/+]\.)/.test(name))
            return;
          let headers = toHeaders(name, stats, isEtag);
          if (cc)
            headers["Cache-Control"] = cc;
          FILES["/" + name.normalize().replace(/\\+/g, "/")] = { abs, stats, headers };
        });
      }
      let lookup2 = opts.dev ? viaLocal.bind(0, dir, isEtag) : viaCache.bind(0, FILES);
      return function(req, res, next) {
        let extns = [""];
        let pathname = parse2(req).pathname;
        let val = req.headers["accept-encoding"] || "";
        if (gzips && val.includes("gzip"))
          extns.unshift(...gzips);
        if (brots && /(br|brotli)/i.test(val))
          extns.unshift(...brots);
        extns.push(...extensions);
        if (pathname.indexOf("%") !== -1) {
          try {
            pathname = decodeURIComponent(pathname);
          } catch (err) {
          }
        }
        let data = lookup2(pathname, extns) || isSPA && !isMatch(pathname, ignores) && lookup2(fallback, extns);
        if (!data)
          return next ? next() : isNotFound(req, res);
        if (isEtag && req.headers["if-none-match"] === data.headers["ETag"]) {
          res.writeHead(304);
          return res.end();
        }
        if (gzips || brots) {
          res.setHeader("Vary", "Accept-Encoding");
        }
        setHeaders(res, pathname, data.stats);
        send2(req, res, data.abs, data.stats, data.headers);
      };
    };
  }
});

// node/index.ts
var node_exports = {};
__export(node_exports, {
  default: () => cosmos
});
module.exports = __toCommonJS(node_exports);
var fs2 = __toESM(require("node:fs/promises"));
var path = __toESM(require("node:path"));
var import_node_util = require("node:util");

// node/generateFixtures.ts
var import_fast_glob = __toESM(require("fast-glob"));
var fs = __toESM(require("node:fs/promises"));
var import_vite = require("vite");
async function generateFixtures(fixturesGlob, basedir) {
  const { init, parse: parse2 } = await import("es-module-lexer");
  await init;
  const absolutePaths = await (0, import_fast_glob.default)("./" + fixturesGlob, {
    cwd: basedir,
    ignore: ["**/node_modules/**"],
    absolute: true
  });
  const fixtures = await Promise.allSettled(absolutePaths.filter((absPath) => absPath.startsWith(basedir)).map(async (absPath) => {
    const tsStripped = await fs.readFile(absPath, "utf8").then((code) => (0, import_vite.transformWithEsbuild)(code, absPath, { charset: "utf8" }));
    const [, exports] = parse2(tsStripped.code);
    const path2 = absPath.slice(basedir.length);
    return exports.map((name) => ({ path: path2, name }));
  })).then((e) => e.flatMap((r) => r.status === "fulfilled" ? r.value : []));
  return fixtures;
}

// node/sendContentMiddleware.ts
var import_vite2 = require("vite");

// node/cleanUrl.ts
var queryRE = /\?.*$/s;
var hashRE = /#.*$/s;
function cleanUrl(url) {
  return url.replace(hashRE, "").replace(queryRE, "");
}

// node/sendContentMiddleware.ts
function sendContentMiddleware(type, content, headers) {
  return async function sendContentMiddleware2(req, res, next) {
    const url = req.url && cleanUrl(req.url);
    if (url !== "/") {
      next();
      return;
    }
    try {
      (0, import_vite2.send)(req, res, await content(), type, { headers });
    } catch (e) {
      next(e);
    }
  };
}

// node/servePublicMiddleware.ts
var import_sirv = __toESM(require_build2());
function servePublicMiddleware(dir, headers) {
  const serve = (0, import_sirv.default)(dir, sirvOptions(headers));
  return function servePublicMiddleware2(req, res, next) {
    const url = req.url && cleanUrl(req.url);
    if (url === "/index.html") {
      next();
      return;
    }
    serve(req, res, next);
  };
}
function sirvOptions(headers) {
  return {
    dev: true,
    etag: true,
    extensions: [],
    setHeaders(res, pathname) {
      if (/\.[tj]sx?$/.test(pathname)) {
        res.setHeader("Content-Type", "application/javascript");
      }
      if (headers) {
        for (const name in headers) {
          res.setHeader(name, headers[name]);
        }
      }
    }
  };
}

// node/transformEntryHTML.ts
function transformEntryHTML({
  projectId,
  rendererFileName
}) {
  return (source) => {
    const config = parse(source);
    if (!config) {
      return source;
    }
    config.playgroundConfig.core.projectId = projectId;
    config.playgroundConfig.core.webRendererUrl = rendererFileName;
    return rewrite(source, config);
  };
}
var mountPlaygroundRE = /(?<=\bmountPlayground\().*(?=\))/g;
function parse(source) {
  const [config] = source.match(mountPlaygroundRE) ?? [];
  if (!config)
    return;
  return JSON.parse(config);
}
function rewrite(source, config) {
  return source.replaceAll(mountPlaygroundRE, JSON.stringify(config));
}

// node/index.ts
var debug = (0, import_node_util.debuglog)("vite-plugin-react-cosmos");
function cosmos({
  decoratorsGlob = "/src/**/*.decorator.tsx",
  fixturesGlob = "/src/**/*.stories.tsx",
  fixturesJSONFileName = "fixtures.json",
  rendererFileName = "cosmos-renderer.html",
  entryFileName = "cosmos.html",
  projectId = "vite-cosmos"
} = {}) {
  let root;
  const transform = transformEntryHTML({
    projectId,
    rendererFileName
  });
  return {
    name: "vite-plugin-react-cosmos",
    config(config) {
      const { root: root2 } = config;
      debug("user defined entry points", config.build?.rollupOptions?.input);
      const implicitIndexCollision = entryFileName === "index.html" && !config.build?.rollupOptions?.input;
      if (implicitIndexCollision) {
      } else {
        config.build ??= {};
        config.build.rollupOptions ??= {};
        config.build.rollupOptions.input ??= path.resolve(root2 ?? "", "index.html");
      }
      const cosmosRenderer = path.resolve(root2 ?? "", rendererFileName);
      return {
        build: {
          rollupOptions: {
            input: [cosmosRenderer]
          }
        },
        optimizeDeps: {
          include: [
            "react",
            "react-cosmos/dist/dom/DomFixtureLoader.js",
            "react-cosmos/dom"
          ],
          exclude: ["vite-plugin-react-cosmos/client"]
        },
        define: {
          __DEV__: JSON.stringify(false)
        }
      };
    },
    configResolved(config) {
      debug("final entry points", config.build.rollupOptions.input);
      root = config.root;
    },
    transform(code, id) {
      if (id.includes("/vite-plugin-react-cosmos/client/index.js") && code.includes("import.meta.cosmos.")) {
        const options = {
          decoratorsGlob,
          fixturesGlob,
          fixturesJSONFileName,
          rendererFileName,
          entryFileName,
          projectId
        };
        return {
          code: code.replaceAll("import.meta.cosmos.options", JSON.stringify(options)).replaceAll("import.meta.cosmos.globEager", "{" + [
            `decorators: import.meta.globEager(${JSON.stringify(decoratorsGlob)})`,
            `fixtures: import.meta.globEager(${JSON.stringify(fixturesGlob)})`
          ].join(",") + "}")
        };
      }
    },
    async generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: fixturesJSONFileName,
        source: await generateFixtures(fixturesGlob, root).then(JSON.stringify)
      });
      this.emitFile({
        type: "asset",
        fileName: entryFileName,
        source: await fs2.readFile(resolve2("../public/index.html"), "utf-8").then(transform)
      });
      const publicDir = resolve2("../public/");
      await fs2.readdir(publicDir).then((files) => Promise.all(files.map(async (fileName) => {
        if (path.resolve(publicDir, fileName) === resolve2("../public/index.html"))
          return;
        this.emitFile({
          type: "asset",
          fileName,
          source: await fs2.readFile(path.resolve(publicDir, fileName))
        });
      })));
    },
    configureServer(server) {
      return () => {
        const { middlewares, config } = server;
        middlewares.use("/" + entryFileName, sendContentMiddleware("html", () => fs2.readFile(resolve2("../public/index.html"), "utf-8").then(transform), config.server.headers));
        middlewares.use("/" + fixturesJSONFileName, sendContentMiddleware("json", () => generateFixtures(fixturesGlob, root).then(JSON.stringify), config.server.headers));
        middlewares.use(servePublicMiddleware(resolve2("../public/"), config.server.headers));
      };
    }
  };
}
function resolve2(segment) {
  return path.resolve(__dirname, segment);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
