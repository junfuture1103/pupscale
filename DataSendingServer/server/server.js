const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// JSON 파싱을 위한 미들웨어 설정
app.use(bodyParser.json());

// POST 요청 처리
app.post('/uploads', (req, res) => {
  const { name, email, phoneNumber, experiences, tableContent, certification } = req.body;

  console.log('받은 데이터:');
  console.log(`이름: ${name}`);
  console.log(`이메일: ${email}`);
  console.log(`연락처: ${phoneNumber}`);
  console.log(`업무 경험: ${experiences.join(", ")}`);
  console.log(`테이블 내용:\n${tableContent}`);
  console.log(`자격증: ${certification}`);

  // 클라이언트에 응답
  res.status(200).send('데이터 전송이 완료되었습니다.');
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
