const http = require('http');

// 클라이언트에서 보낼 데이터
const postData = JSON.stringify({
  name: 'John Doe',
  email: 'john@example.com',
  phoneNumber: '123-456-7890',
  experiences: ['Experience 1', 'Experience 2'],
  tableContent: '테이블 내용입니다.',
  certification: 'Certification'
});

// 요청 옵션 설정
const options = {
  hostname: '101.79.9.58',
  port: 3000,
  path: '/uploads',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData, 'utf-8') // 바이트 길이 계산
  }
};

// HTTP 요청 보내기
const req = http.request(options, (res) => {
  console.log(`서버 응답 코드: ${res.statusCode}`);
  res.on('data', (data) => {
    console.log('서버 응답 데이터:', data.toString());
  });
});

req.on('error', (error) => {
  console.error('요청 오류:', error);
});

// 데이터 전송
req.write(postData);
req.end();
