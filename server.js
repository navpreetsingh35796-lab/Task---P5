require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so your React frontend can communicate with this backend
app.use(cors());

// Set SendGrid API Key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn('Warning: SENDGRID_API_KEY is not defined in your .env file!');
}

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.send('DEV@Deakin Express Backend is running!');
});

// Helper validation for email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// POST /subscribe route
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  // Validation
  if (!email || !isValidEmail(email)) {
    console.warn(`[STATUS 400] Validation failed for input: ${email}`);
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const msg = {
    to: email,
    from: process.env.SENDER_EMAIL || 'navpreetsingh35796@gmail.com',
    subject: 'Welcome to DEV@Deakin Daily Insider!',
    text: 'Thank you for subscribing to DEV@Deakin!',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Welcome to DEV@Deakin!</h2>
        <p>Thank you for subscribing to our Daily Insider.</p>
        <p>Stay tuned for tutorials, dev tips, and community highlights!</p>
      </div>
    `,
  };

  try {
    const [response] = await sgMail.send(msg);

    // REQUIRED FOR REPORT: Status 200 logged in terminal
    console.log(`[STATUS 200] Email successfully sent to: ${email}`);
    console.log(`[SendGrid API Response]: ${response.statusCode}`);

    return res.status(200).json({
      success: true,
      message: 'Welcome email sent successfully! Please check your inbox.',
      statusCode: response.statusCode
    });
  } catch (error) {
    console.error('[STATUS 500] SendGrid Error:', error.response ? error.response.body : error.message);
    return res.status(500).json({
      success: false,
      error: 'Failed to send welcome email. Please check your API key and verified sender.'
    });
  }
});

// Keep server alive and listening
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});