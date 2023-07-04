import { ShareData } from 'types';
import { document } from 'browser-monads';

export const truncate = (text = '', length: number) =>
  text
    ? text.length <= length
      ? text
      : `${text.substring(0, length - 3)}...`
    : '';

export const generateFacebookShareParams = ({ url }: ShareData) => ({
  u: url,
});

export const generateTwitterShareParams = ({
  url,
  title,
  description,
}: ShareData) => ({
  url,
  text: truncate(`${title} - ${description}`, 280),
});

export const generateLinkedInShareParams = ({
  url,
  title,
  description,
}: ShareData) => ({
  mini: true,
  url: url,
  title: truncate(title, 200),
  summary: truncate(description, 200),
});

export const sendEmail = (message: {
  email: string;
  body: string;
  subject: string;
}) => {
  const email = message.email;
  const subject = message.subject;
  const emailBody = message.body;
  const body = document.querySelector('body');
  const link = `mailto:${email}?subject=${subject}&body=${emailBody}`;
  const trigger = document.createElement('a');
  trigger.setAttribute('href', link);
  trigger.setAttribute('target', '_blank');
  trigger.setAttribute('rel', 'noreferrer');
  trigger.setAttribute('style', 'visibility:hidden');
  body?.appendChild(trigger);
  trigger.click();
  body?.removeChild(trigger);
};
