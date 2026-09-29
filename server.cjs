/**
 * Production Static Web Server for Windows
 * - Node.js 내장 모듈(http, fs, path) 기반으로 외부 패키지 설치 없이 즉시 실행
 * - dist/ 폴더의 빌드 파일 정적 서빙 (HTML, CSS, JS, 이미지, PPTX, XLSX)
 * - 0.0.0.0 바인딩으로 같은 네트워크(공유기/사내망) 내 타 PC 및 모바일 접속 지원
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const DIST_DIR = path.resolve(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8'
};

if (!fs.existsSync(DIST_DIR)) {
  console.error('[오류] dist 폴더를 찾을 수 없습니다. 먼저 npm run build 를 실행해주세요.');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  // CORS & Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Access-Control-Allow-Origin', '*');

  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  let filePath = path.join(DIST_DIR, reqPath);

  // Directory traversal defense
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('403 Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // SPA Fallback: 존재하지 않는 라우트는 index.html로 응답
      const indexPath = path.join(DIST_DIR, 'index.html');
      fs.readFile(indexPath, (errIndex, content) => {
        if (errIndex) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // 캐싱 헤더 설정
    if (ext === '.html') {
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }

    res.writeHead(200, { 'Content-Type': contentType, 'Content-Length': stats.size });
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('========================================================');
  console.log(`[윈도우 웹 서버 구동 완료]`);
  console.log(`- 로컬 접속:   http://localhost:${PORT}`);
  console.log(`- 네트워크 접속: http://0.0.0.0:${PORT} (사내/동일 Wi-Fi 내 IP로 접속 가능)`);
  console.log(`- 서비스 루트: ${DIST_DIR}`);
  console.log('========================================================');
});
