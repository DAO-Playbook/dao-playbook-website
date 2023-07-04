import {
  generateFacebookShareParams,
  generateLinkedInShareParams,
  generateTwitterShareParams,
} from '@utils/generics';
import { SharePlatform } from 'types';

export const TWITTER_URL = 'https://twitter.com/_bablo_';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/lolade-babs';
export const META_IMAGE_URL = ``;
export const PART_TAG_COLORS = [
  '#7876D0',
  '#F3D568',
  '#EC90BE',
  '#94D8E1',
  '#FFB58A',
  '#79A6FB',
  '#EA8575',
  '#EBD7CB',
  '#CB8BE4',
  '#BBDC81',
  '#97C4B3',
  '#718AF9',
  '#DBE65B',
  '#C0DBED',
  '#ADBCE1',
  '#F1D09F',
  '#DFCCE1',
  '#BDBDBD',
];
export const TWITTER_SHARE_URL = 'https://twitter.com/intent/tweet';
export const FACEBOOK_SHARE_URL = 'https://www.facebook.com/sharer/sharer.php';
export const LINKEDIN_SHARE_URL = 'https://www.linkedin.com/shareArticle';

export const SHARE_PLATFORM_DATA = {
  [SharePlatform.Facebook]: {
    url: FACEBOOK_SHARE_URL,
    getParams: generateFacebookShareParams,
  },
  [SharePlatform.LinkedIn]: {
    url: LINKEDIN_SHARE_URL,
    getParams: generateLinkedInShareParams,
  },
  [SharePlatform.Twiter]: {
    url: TWITTER_SHARE_URL,
    getParams: generateTwitterShareParams,
  },
};

export const DAO_PLAYBOOK_HELP_EMAIL = 'help@daoplaybook.com';

export const HELP_EMAIL_DATA = {
  email: DAO_PLAYBOOK_HELP_EMAIL,
  body: '',
  subject: 'Get in touch',
};
