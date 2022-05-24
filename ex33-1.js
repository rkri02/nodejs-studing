require('http').createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>Hello World!</h1>');
}).listen(30001, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:30001');
});
