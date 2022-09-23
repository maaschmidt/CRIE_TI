import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

let email_user = process.env.EMAIL_USER;
let email_pass = process.env.EMAIL_PASS;
let email_to = 'marcel.schmidt@universo.univates.br'
let email_subject = 'Enviando email pelo nodeJS'
let email_content = 'Email Teste'
let email_html = 'Só email de <i>exemplo</i>, com <b>html</b> e acentuação'

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email_user,
    pass: email_pass
  }
})

var mailOptions = {
  from: email_user,
  to: email_to,
  subject: email_subject,
  text: email_content,
  html: email_html
};

transporter.sendMail(mailOptions, function(error, info){
  if (error){
    console.log('Erro ao enviar email:' + error)
  } else {
    console.log('Email enviado: '+ info.response)
  }
});