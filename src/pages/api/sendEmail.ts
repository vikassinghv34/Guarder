// pages/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const transporter = nodemailer.createTransport({
        // Configure your email service provider (e.g., SMTP settings)
        port: 587,
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.SMTP_AUTH_USER,
          pass: process.env.SMTP_AUTH_PASS,
        },
        secure: false,
      });

      const name = req.body.name;
      const email = req.body.email;

      const mailOptions = {
        from: 'hztltrainingportal@gmail.com',
        to: email,
        subject: 'Form Submission',
        text: `Thank you, ${name},\nEmail: ${email} \nOur customer service get back to you soon.`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
