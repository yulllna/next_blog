import nodemailer from 'nodemailer'

export type EmailData = {
    from: string;
    subject: string;
    message: string;
};
const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_PASSWORD;

const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',  
    secure: true,  
    auth: {
        user: email,
        pass: pass
    }
});

export async function sendEmail({ subject, from, message }: EmailData) {
    const mailData = {
        to: email,
        subject: `[BLOG] ${subject}`,
        from,
        html: `
            <h1>${subject}</h1>
            <div>${message}</div>
            <br/>
            <p>보낸사람: ${from}</p>
        `
    }
    return transporter.sendMail(mailData);
}

