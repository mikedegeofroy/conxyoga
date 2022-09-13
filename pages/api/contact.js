import nodemailer from "nodemailer";

export default async (req, res) => {
    const { email } = req.body;
    console.log(email);

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Conxyoga",
        html: "tonto",
    }

    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    })

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: error || error.toString() });
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    return res.status(200).json({ error: "" });
};