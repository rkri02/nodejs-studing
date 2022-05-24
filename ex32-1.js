// http 모듈 sever 객체
// 웹 서버 생성과 실행
const http = require('http');

const server = http.createServer();


server.listen(5000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:5000');
  });


// 웹서버 종료
const testClose = function () {
  server.close();
  console.log('서버가 종료되었습니다, http://127.0.0.1:5000');
};

// 강제 서버종료
setTimeout(testClose, 3000);


/*========================================
http모듈의 객체로 createServer()로 생성됨
listen()            - 서버실행
close()             - 서버종료
========================================*/