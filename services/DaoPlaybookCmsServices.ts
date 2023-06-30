import axios from 'axios';

const DaoPlaybookCmsServices = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default DaoPlaybookCmsServices;
