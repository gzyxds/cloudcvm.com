/* eslint-disable */
// 预览静态导出产物（out/）用的小型静态服务器。
// 用途：验证「首屏/加载态」类问题时必须看构建产物（next dev 不走同一条路径）。
// 用法：node scripts/serve-out.js  → http://localhost:8099
const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..', 'out')
const port = Number(process.env.PORT || 8099)
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
}

const isFile = (p) => {
  try {
    return fs.statSync(p).isFile()
  } catch {
    return false
  }
}

http
  .createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split('?')[0])
      let file = path.join(root, urlPath)
      if (isFile(file)) {
        // ok
      } else if (isFile(file + '.html')) {
        file += '.html'
      } else if (isFile(path.join(file, 'index.html'))) {
        file = path.join(file, 'index.html')
      } else {
        res.writeHead(404)
        return res.end('404')
      }
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' })
      fs.createReadStream(file).pipe(res)
    } catch (e) {
      res.writeHead(500)
      res.end('500 ' + e.message)
    }
  })
  .listen(port, () => console.log(`out/ served at http://localhost:${port}`))
