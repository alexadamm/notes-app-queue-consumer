const nodemailer = require('nodemailer');

class MailSender {
    constructor() {
        this._transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_ADDRESS,
                pass: process.env.MAIL_PASSWORD,
            },
        });
    }

    sendEmail(targetMail, content) {
        const message = {
            from: 'Notes App',
            to: targetMail,
            subject: 'Ekspor Catatan',
            text: 'Terlampir hasil dari ekspor catatan',
            attachments: [
                {
                    filename: 'note.json',
                    content,
                }
            ],
        };

        return this._transporter.sendMail(message);
    }
}

module.exports = MailSender;
