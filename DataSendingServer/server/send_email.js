const nodemailer = require('nodemailer');
const fs = require('fs');

async function sendEmail() {
    // 보내는 사람 이메일 설정
    const senderEmail = 'gygh7562@gmail.com';
    const senderPassword = 'qwin vccw cydy pfae'; // 보내는 이메일의 암호

    // 이메일 수신자 설정
    const receiverEmail = 'junhak1103@naver.com';

    // 이메일 전송을 위한 SMTP 설정
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: senderEmail,
            pass: senderPassword
        }
    });

    // 첨부 파일 경로
    const attachmentPath = 'data.xlsx';

    // 첨부 파일 읽기
    const attachment = fs.readFileSync(attachmentPath);

    // 이메일 내용 설정
    let mailOptions = {
        from: senderEmail,
        to: receiverEmail,
        subject: '이메일 제목',
        text: '이메일 내용',
        attachments: [{
            filename: 'data.xlsx',
            content: attachment
        }]
    };

    // 이메일 전송
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

sendEmail();
