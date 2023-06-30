import { DaoPlaybookCmsServices } from 'services';
import * as api from '@data/apiRoutes';

export const getBbcEvents = async (params: any) => {
  const result = await DaoPlaybookCmsServices.get(
    `${api.bbcEventsRoute}?${params}`,
  );
  return result.data;
};
