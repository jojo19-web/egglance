const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const root = __dirname;
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.apk': 'application/vnd.android.package-archive',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const requestedPath = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname).replace(/^\/+/, '');
  const filePath = path.resolve(root, requestedPath);

  if (!filePath.startsWith(root + path.sep) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  const headers = {
    'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream',
    'Cache-Control': path.extname(filePath) === '.html' ? 'no-cache' : 'public, max-age=86400',
  };

  if (path.extname(filePath) === '.apk') {
    headers['Content-Disposition'] = 'attachment; filename="app-demo.apk"';
  }

  res.writeHead(200, headers);
  fs.createReadStream(filePath).pipe(res);
}

module.exports = handler;

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  http.createServer(handler).listen(port, () => {
    console.log(`Planta is running at http://localhost:${port}`);
  });
}
