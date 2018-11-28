const Mailer = require('./Mailer');

const EmailClass = (req, res) => {
  const {
    template, subject, name, email, ...context
  } = req.body;

  const adminContact = {
    name: 'Julian', address: 'julian@thankyoustudio.com',
  };

  const mailOptions = {
    from: { name, address: email },
    to: adminContact,
    subject,
    template: {
      name: `./email/templates/${template}.pug`,
      engine: 'pug',
      context: {
        name,
        email,
        ...context,
      },
    },
  };

  return new Promise((resolve, reject) => {
    Mailer(mailOptions).then(() => {
      resolve();
      res.status(200).send('success');
    }).catch((err) => {
      console.error('Error sending email ', err);
    });
  });
};

module.exports = EmailClass;
