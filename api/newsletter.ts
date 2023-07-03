import { MAILCHIMP_LIST_ID } from '@data/env';
import { MailchimpServices } from '@services/index';
import { TFunc } from 'types';

export const subscribeToNewsletter = async (
  data: {
    email: string;
  },
  cb: TFunc<boolean>,
) => {
  try {
    const result = await MailchimpServices.lists.addListMember(
      MAILCHIMP_LIST_ID,
      {
        email_address: data.email,
        status: 'subscribed',
      },
    );
    cb(!!result.data);
  } catch (error) {
    cb(false);
  }
};
