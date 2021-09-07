const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  console.log("I am working");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "sprince436@gmail.com",
      pass: "Ranjusingh7739",
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: "Prince Kumar <sprince436@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
