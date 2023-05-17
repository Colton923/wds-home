import nodemailer from 'nodemailer'

export default async function POST(req: any, res: any) {
  const { name, email, phone, message, comments } = req.body

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'k.koerne@webdevsolutionsllc.com',
      pass: process.env.NEXT_GMAIL_PASSWORD,
    },
  })

  // Send mail with defined transport object
  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: 'k.koerne@webdevsolutionsllc.com',
    subject: `New Free Quote Request Received (${email})`,
    text: `
      You have received a new quote request.

        Name: ${name}
        Email: ${email}
        Phone: ${phone === '' ? 'Not Provided' : phone}
        Project Description:
        ----------------------------------
        ${message}
        ----------------------------------
        Additional Comments:
        ----------------------------------
        ${comments === '' ? 'Not Provided' : comments}
        ----------------------------------



      2023 Web Dev Solutions LLC. All rights reserved.
    `,
  })

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: 'c.mcclin@webdevsolutionsllc.com',
    subject: `New Free Quote Request Received (${email})`,
    text: `
      You have received a new quote request.

        Name: ${name}
        Email: ${email}
        Phone: ${phone === '' ? 'Not Provided' : phone}
        Project Description:
        ----------------------------------
        ${message}
        ----------------------------------
        Additional Comments:
        ----------------------------------
        ${comments === '' ? 'Not Provided' : comments}
        ----------------------------------



      2023 Web Dev Solutions LLC. All rights reserved.
    `,
  })

  res.status(200).json({ message: 'Email sent successfully' })
}
