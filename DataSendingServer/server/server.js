const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');

const app = express();
const PORT = 3000;

// JSON 파싱을 위한 미들웨어 설정
app.use(bodyParser.json());

// 엑셀 파일 생성 및 데이터 추가 함수
async function addToExcel(data) {
  console.log("execel add start");
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Data');

  // 헤더 추가
  sheet.addRow(['이름', '이메일', '연락처', '업무 경험', '테이블 내용', '자격증']);

  // 데이터 추가
  const { name, email, phoneNumber, experiences, tableContent, certification } = data;
  sheet.addRow([name, email, phoneNumber, experiences.join(", "), tableContent, certification]);

  // 파일 저장
  await workbook.xlsx.writeFile('data.xlsx');
}

// POST 요청 처리
app.post('/uploads', (req, res) => {
  const data = req.body;

  console.log('받은 데이터:');
  console.log(`이름: ${data.name}`);
  console.log(`이메일: ${data.email}`);
  console.log(`연락처: ${data.phoneNumber}`);
  console.log(`업무 경험: ${data.experiences.join(", ")}`);
  console.log(`테이블 내용:\n${data.tableContent}`);
  console.log(`자격증: ${data.certification}`);

  // 엑셀 파일에 데이터 추가
  addToExcel(data)
    .then(() => {
      console.log('엑셀 파일에 데이터 추가 완료');
      res.status(200).send('데이터 전송이 완료되었습니다.');
    })
    .catch((err) => {
      console.error('엑셀 파일에 데이터 추가 중 오류 발생:', err);
      res.status(500).send('서버 오류 발생');
    });
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
