import { ShareData } from 'types';

export const truncate = (text = '', length: number) =>
  text
    ? text.length <= length
      ? text
      : `${text.substring(0, length - 3)}...`
    : '';

export const generateFacebookShareParams = ({ url }: ShareData) => ({
  u: encodeURIComponent(url),
});

export const generateTwitterShareParams = ({
  url,
  title,
  description,
}: ShareData) => ({
  url: encodeURIComponent(url),
  text: encodeURIComponent(truncate(`${title} - ${description}`, 200)),
});

export const generateLinkedInShareParams = ({
  url,
  title,
  description,
}: ShareData) => ({
  mini: true,
  url: encodeURIComponent(url),
  title: encodeURIComponent(truncate(title, 200)),
  summary: encodeURIComponent(truncate(description, 200)),
});
