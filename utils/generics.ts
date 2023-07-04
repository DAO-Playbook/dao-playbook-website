import { ShareData } from 'types';

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
  text: `${truncate(`${title} - ${description}`, 200 - url.length)} ${url}`,
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
