const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "josephiusx@gmail.com",
  from: "josephiusx@gmail.com",
  subject: "This is my first creation!",
  text: "I hope this one actually gets to you.",
});
