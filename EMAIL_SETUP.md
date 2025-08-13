# Email Setup Instructions

## Contact Form Email Functionality

The contact form now uses EmailJS to send actual emails. Follow these steps to set it up:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

### 2. Create Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the authentication steps
- Note down the **Service ID**

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

- Save the template and note down the **Template ID**

### 4. Get Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

### 5. Update Configuration
- Open `app/config/emailjs.ts`
- Replace the placeholder values:
  - `YOUR_SERVICE_ID` with your actual Service ID
  - `YOUR_TEMPLATE_ID` with your actual Template ID
  - `YOUR_PUBLIC_KEY` with your actual Public Key

### 6. Test the Form
- Start your development server
- Fill out the contact form
- Submit and check if you receive the email

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- Perfect for a portfolio website

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
- Ensure your template variables match the code: `{{from_name}}`, `{{from_email}}`, `{{message}}`
