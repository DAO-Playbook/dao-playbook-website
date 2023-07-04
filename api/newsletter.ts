import { NotificationManager } from 'react-notifications';
import { subscribeRoute } from '@data/apiRoutes';
import { DaoPlaybookCmsServices } from '@services/index';
import { TFunc } from 'types';
import { AxiosError } from 'axios';

export const subscribeToNewsletter = async (
  data: {
    email: string;
  },
  cb: TFunc<boolean>,
) => {
  try {
    const result = await DaoPlaybookCmsServices.post(subscribeRoute, data);
    cb(!!result.data);
  } catch (error) {
    NotificationManager.error(
      (error as AxiosError<any>)?.response?.data?.error?.details?.title ||
        'Something went wrong',
    );
    cb(false);
  }
};
