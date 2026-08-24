const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..", "out");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p.endsWith("/")) p += "index.html";
    let file = path.join(root, p);
    if (!fs.existsSync(file)) {
      // directory-style URLs without trailing slash
      if (fs.existsSync(file + ".html")) file += ".html";
      else {
        res.writeHead(404);
        res.end("not found");
        return;
      }
    }
    if (fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
    res.writeHead(200, {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
    });
    fs.createReadStream(file).pipe(res);
  })
  .listen(4180, () => console.log("serving on 4180"));
