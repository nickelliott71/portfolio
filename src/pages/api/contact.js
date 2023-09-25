import nodemailer from 'nodemailer';

const emailAddress = process.env.EMAIL_ADDRESS;
const emailPwd = process.env.EMAIL_PWD;

export default async function handler(req, res) {
  
  console.log("here 1")

  if (req.method === 'POST') {

    console.log("here 2")
    try {
      const { name, email, phoneNumber, message } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // Set to true if you use SSL/TLS
        auth: {
          user: emailAddress, // Your Microsoft 365 email address
          pass: emailPwd, // Your email password or app password if 2FA is enabled
        },
      });
    
    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });
  



      // Define the email content
      const mailOptions = {
        from: emailAddress,
        to: emailAddress, // Change to the recipient's email address
        subject: 'New Contact Form Submission',
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone Number: ${phoneNumber}</p>
          <p>Message: ${message}</p>
        `,
      };

      // Send the email
      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });      

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