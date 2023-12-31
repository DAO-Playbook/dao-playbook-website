import qs from 'qs';
import { DaoPlaybookCmsServices } from 'services';
import * as api from '@data/apiRoutes';
import { IObject, WithAttribute, WithData } from 'types';
import { Books, Chapter } from 'types/book';

export const getBooks = async (params: IObject): Promise<Books> => {
  try {
    const result = await DaoPlaybookCmsServices.get(api.booksRoute, {
      params,
      paramsSerializer: params =>
        qs.stringify(params, {
          encodeValuesOnly: true,
        }),
    });
    return result.data;
  } catch (error) {
    return {
      data: [],
    };
  }
};

export const getChapters = async (
  params: IObject,
): Promise<WithData<WithAttribute<Chapter>[]>> => {
  try {
    const result = await DaoPlaybookCmsServices.get(api.chaptersRoute, {
      params,
      paramsSerializer: params =>
        qs.stringify(params, {
          encodeValuesOnly: true,
        }),
    });
    return result.data;
  } catch (error) {
    return {
      data: [],
    };
  }
};
