const nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars")

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'pruebashav@gmail.com',
        pass: 'wT639ENv4k3Dwmx'
    },
    tls: {
        rejectUnauthorized: false
    }
});


const handlebarOptions = {
    viewEngine: {
        extName: '.handlebars',
        partialsDir: 'server/mail/views/patials',
        layoutsDir: 'server/mail/views/layouts',
        defaultLayout: '',
    },
    viewPath: 'server/mail/views/templates',
    extName: '.handlebars',
};
transporter.use('compile', hbs(handlebarOptions));

exports.welcomeMail = (email, name) => transporter.sendMail({
    from: 'Vue Mailer',
    to: 'havillalobos331@gmail.com',
    subject: "Account Creation",
    template: "welcome",
    context: {
        user: 'hola'
    }
});
