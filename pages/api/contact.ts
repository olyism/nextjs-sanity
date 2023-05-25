import type {NextApiRequest} from 'next'
const nodemailer = require('nodemailer')

export default function POST(req: NextApiRequest) {
  const {body} = req
  const {subject, text, to} = body

  const message = {
    from: process.env.CONTACT_EMAIL_ADDRESS,
    to,
    subject,
    text,
    html: `<p>${text}</p>`,
  }

  const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com.au',
    auth: {
      user: process.env.CONTACT_EMAIL_ADDRESS,
      pass: process.env.CONTACT_EMAIL_PASSWORD,
    },
    secure: true,
  })

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}
