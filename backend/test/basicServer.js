// basicServer.js
 
// node.js의 http모듈을 변수 http로 추출합니다.
var http = require('http');
 
// http모듈의 createServer 함수를 호출하여 서버를 생성합니다.
// req: request. 웹 요청 매개변수, res: response. 웹 응답 매개변수
http.createServer(function (req, res) {
    // writeHead: 응답 헤더를 작성합니다.
    // 200: 응답 성공, text/html: html문서
    res.writeHead(200, {'Content-Type': 'text/html'});
    // end: 응답 본문을 작성합니다.
    res.end('Hello World2');
    // listen: 매개변수로 포트와 호스트를 지정합니다.
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
console.log(process.env);           // 컴퓨터 환경과 관련된 정보를 가진 객체
console.log(process.version);       // node.js의 버전
console.log(process.versions);      // node.js와 연관된 프로그램들의 버전을 가진 객체
console.log(process.arch);          // 프로세서의 아키텍처(arm/ia32/x64)
console.log(process.platform);      // 플랫폼(win32/linux/sunos/freebsd/darwin)
console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체
console.log(process.uptime());      // 현재 프로그램이 실행된 시간