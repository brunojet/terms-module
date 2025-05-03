const http = require('http');
const fs = require('fs');
const path = require('path');

// Configurações
const PORT = 8080; // Porta do servidor
const DIRECTORY = path.resolve(__dirname, 'dist/terms-module/browser'); // Diretório a ser servido

// Criação do servidor HTTP
const server = http.createServer((req, res) => {
  const filePath = path.join(DIRECTORY, req.url === '/' ? 'index.html' : req.url);
  const extname = path.extname(filePath);

  // Mapear tipos MIME
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Ler e servir o arquivo
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Iniciar o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});