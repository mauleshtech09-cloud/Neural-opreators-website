/**
 * Update whatsapp with your number: country code + number, no + or spaces.
 * Example India: 919876543210 → https://wa.me/919876543210
 */
export const CONTACT = {
  whatsapp: '9875078909',
  email: 'hello@neuraloperators.com',
};

export const WHATSAPP_URL = `https://wa.me/919875078909`;

export const EMAIL_URL = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Inquiry from Neural Operators Website')}`;
