import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phoneNumber, message } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Set your email service provider and credentials here
        service: 'YourEmailServiceProvider',
        auth: {
          user: 'YourEmailAddress',
          pass: 'YourEmailPassword',
        },
      });

      // Define the email content
      const mailOptions = {
        from: 'YourEmailAddress',
        to: 'RecipientEmailAddress', // Change to the recipient's email address
        subject: 'New Contact Form Submission',
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone Number: ${phoneNumber}</p>
          <p>Message: ${message}</p>
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).end();
  }
}