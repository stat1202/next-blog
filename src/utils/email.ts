import nodemaiiler from 'nodemailer'

export type EmailData = {
  from: string;
  subject: string;
  message: string;
}

const transpoter = nodemaiiler.createTransport(
  {
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PW,
  },
  }
)

export async function sendEmail( {subject, from, message}: EmailData){
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from,
    html:`
      <h1>${subject}</h1>
      <div>${message}</div>
      <br/>
      <p>보낸사람: ${from}</p>
    `
  }

  return transpoter.sendMail(mailData)
}