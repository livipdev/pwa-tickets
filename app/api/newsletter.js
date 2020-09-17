import axios from 'axios';

const CONFIG = {
  auth: {
    username: 'anystring',
    password: process.env.MAILCHIMP_API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
};

export function subscribe(email) {
  const URL = `${process.env.MAILCHIMP_API_URL}/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`;

  return axios.post(URL, {
    email_address: email,
    status: 'subscribed',
  }, CONFIG);
}
