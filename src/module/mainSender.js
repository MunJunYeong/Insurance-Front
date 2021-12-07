// import { createTransport } from 'nodemailer';
// // const senderInfo = require('../config/senderInfo.json');
// // 메일발송 객체
// var email = '';
// var content = '';

// const setData = (emailData, contentData) => {
//     email= emailData
//     content = contentData
// }


// const mailSender = {
//   // 메일발송 함수
//     sendGmail: function () {
//       var transporter = createTransport({
//         service: 'gmail',   // 메일 보내는 곳
//         prot: 587,
//         host: 'smtp.gmlail.com',  
//         secure: false,  
//         requireTLS: true ,
//         auth: {
//           user: 'duawptjd98',  // 보내는 메일의 주소
//           pass: 'dua1650!'   // 보내는 메일의 비밀번호
//         }
//     });
//     // 메일 옵션
//     var mailOptions = {
//       from: 'duawptjd98@gmail.com', // 보내는 메일의 주소
//       to: email, // 수신할 이메일
//       subject: '보험', // 메일 제목
//       text: content // 메일 내용
//     };
    
//     // 메일 발송    
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });

//   }
// }

// export default {mailSender, setData};


