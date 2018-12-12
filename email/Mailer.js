const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};
const nodemailerMailgun = nodemailer.createTransport(mg(auth));

const MailOptions = (mailOptions) =>
  new Promise((resolve, reject) => {
    console.log('mailOptions', mailOptions);
    nodemailerMailgun.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });

module.exports = MailOptions
