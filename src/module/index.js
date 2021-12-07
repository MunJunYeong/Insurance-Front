
// var nodemailer = require('nodemailer');
// var smtpPool=require('nodemailer-smtp-pool');

const checkValidateDate = (dateString)=>{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
    return false;
    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
}

// const sendMail = (emailData, contentData) => {
//     try {
//       const mailConfig = {
//         service: 'Naver',
//         host: 'smtp.naver.com',
//         port: 587,
//         auth: {
//           user: "msw711666@naver.com",
//           pass: "answnsdud092"
//         }
//       }
//       let message = {
//         from: process.env.MAIL_EMAIL,
//         to: emailData,
//         subject: '신동아화재 보험회사 계약 청약서',
//         html: contentData
//       }
//       let transporter = nodemailer.createTransport(mailConfig)
//       transporter.sendMail(message)
//     } catch (error) {
//       console.log(error)
//     }
//   }


module.exports = {
    checkValidateDate
}