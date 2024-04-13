import nodemailer from 'nodemailer';

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_PASSWORD;

export type SendMailParam = {
    toEmail: string;
    subject: string;
    text: string;
}

export const mailSender = {
    // 메일발송 함수
    sendGmail: function (param: SendMailParam) {
      const transporter = nodemailer.createTransport({
        port: 587,
        host: 'smtp.gmlail.com',  
        secure: false,  
        requireTLS: true ,
        auth: {
          user: email,  // 보내는 메일의 주소
          pass: pass   // 보내는 메일의 비밀번호
        }
      });
      // 메일 옵션
      const mailOptions = {
        from: email, // 보내는 메일의 주소
        to: param.toEmail, // 수신할 이메일
        subject: param.subject, // 메일 제목
        text: param.text // 메일 내용
      };
      
      // 메일 발송    
      transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  
    }
}
  
module.exports = mailSender;