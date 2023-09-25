import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  
  console.log("here 1")

  if (req.method === 'POST') {

    console.log("here 2")
    try {
      const { name, email, phoneNumber, message } = req.body;

    

      res.status(200).json({ message: 'Email sent successfully in api' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email in api' });
    }
  } else {
    res.status(405).end();
    console.log("here 405")
  }
}