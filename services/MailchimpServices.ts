import MailchimpServices from '@mailchimp/mailchimp_marketing';
import { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX } from '@data/env';

MailchimpServices.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX,
});

export default MailchimpServices;
