import { DAO_PLAYBOOK_CMS_URL } from '@data/env';
import axios from 'axios';

const DaoPlaybookCmsServices = axios.create({
  baseURL: `${DAO_PLAYBOOK_CMS_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default DaoPlaybookCmsServices;
