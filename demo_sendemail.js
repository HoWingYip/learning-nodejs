var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "",
  auth: {
    user: "",
    pass: ""
  }
});

var mailOptions = {
  from: "",
  to: "",
  subject: "Node.js Emailing",
  text: "Yeah, that's pretty much it."
};

transporter.sendMail(mailOptions, (err, info) => {
  if(err) console.error(err);
  else console.log("Email sent: " + info.response);
});

//SENSITIVE INFORMATION WAS REMOVED.