import { ShareData } from 'types';

export const truncate = (text = '', length: number) =>
  text
    ? text.length <= length
      ? text
      : `${text.substring(0, length - 3)}...`
    : '';

export const generateFacebookShareParams = ({ url }: ShareData) => ({
  u: encodeURI(url),
});

export const generateTwitterShareParams = ({
  url,
  title,
  description,
}: ShareData) => ({
  url: encodeURI(url),
  text: encodeURI(truncate(`${title} - ${description}`, 200)),
});

export const generateLinkedInShareParams = ({
  url,
  title,
  description,
}: ShareData) => ({
  mini: true,
  url: encodeURI(url),
  title: encodeURI(truncate(title, 200)),
  summary: encodeURI(truncate(description, 200)),
});
