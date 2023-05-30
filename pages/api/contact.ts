import type {NextApiRequest, NextApiResponse} from 'next'
const nodemailer = require('nodemailer')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {body} = req
  const {name, email, subject, text, to} = body

  const message = {
    from: process.env.CONTACT_EMAIL_ADDRESS,
    to,
    replyTo: email,
    name,
    subject,
    sender: email,
    text,
    html: `<p>${text}</p>`,
  }

  const transporter = nodemailer.createTransport({
    host: process.env.CONTACT_EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.CONTACT_EMAIL_ADDRESS,
      pass: process.env.CONTACT_EMAIL_PASSWORD,
    },
    secure: false,
  })

  // @ts-ignore
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err)
      res.status(500).json({success: false, message: 'Failed to send email'})
    } else {
      console.log(info)
      res.status(200).json({success: true, message: 'Email sent successfully'})
    }
  })
}
