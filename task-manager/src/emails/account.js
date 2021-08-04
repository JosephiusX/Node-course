const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = "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";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "josephiusx@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "josephiusx@gmail.com",
    subject: "Sorry to see you go :(",
    text: `Sorry to see that you are deleteing your account ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};
