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

exports.welcomeMail = (email, data) => transporter.sendMail({
    from: 'Vue Mailer',
    to: email,
    subject: "Account Creation",
    template: "example",
    context: {
        img: data.qr,
        buy_date: data.buyDate,
        price: data.price,
        name: data.name,
        date: data.date,
        area: data.area,
        old: data.old,
        adult: data.adult,
        child: data.child,
        vehicle_name: data.vehicleName,
        vehicle_plate: data.vehiclePlate,
        activity: data.activity
    }
});
