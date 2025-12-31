// EmailJS Configuration
// You need to sign up at https://www.emailjs.com/ and get these values

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  recipientEmail: import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new Email Service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Copy the Service ID, Template ID, and Public Key
// 5. Replace the placeholder values above with your actual values
