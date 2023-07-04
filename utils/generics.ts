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
  url,
  text: truncate(`${title} - ${description}`, 280),
});

export const generateLinkedInShareParams = ({
  url,
  title,
  description,
}: ShareData) => ({
  url,
  title: truncate(title, 200),
  summary: truncate(description, 256),
  mini: true,
});
