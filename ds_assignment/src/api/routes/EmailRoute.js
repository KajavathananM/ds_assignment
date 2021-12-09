var nodeMailer = require('nodemailer');
var express=require('express');

var email=express.Router();

email.post('/send-email', function (req, res) {
    var transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: ' ',
            pass: ' '
        }
    });

    const mailOptions = {
        from: ' ', // sender address
        to: ' ', // receiver address
        subject: 'Confirmation Message Regarding Railway Ticket', // Subject line
        html: '<p>Your Railway Ticket is confirmed</p>'// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err);
        else
            console.log(info);
    });
});

module.exports=email;
