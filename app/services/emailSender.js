const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_USER,
    pass: process.env.SENDER_USER_PASS,
  },
});
// point to template folder
const handlebarOption = {
  viewEngine: {
    partialsDir: path.join(__dirname, '../views/'),
    defaultLayout: false,
  },
  viewPath: path.join(__dirname, '../views/'),
};

// use template file with nodemailer
transporter.use('compile', hbs(handlebarOption));

// trigger the sending email
module.exports = {
  sendEmail(args, logoName, template, emailDest, subject1) {
    console.log(args, '========================== Masuk send email ================');
    let mailOptions = {
      from: `SMK Muhammadiyah 7 Gondanglegi ${process.env.SENDER_USER}`,
      to: emailDest,
      subject: subject1,
      // template: 'verify-register',
      template,
      // context: {
      //     username: args.username,
      //     urlVerify
      // },
      context: args,
      attachments: [
        {
          filename: logoName,
          path: path.join(__dirname, args.lampiran),
          cid: 'logo'
      },

      ],
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
      error ? console.log(error) : console.log(`Message sent: ${info.response}`);
    });
  },
};
