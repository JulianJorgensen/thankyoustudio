import Prismic from 'prismic-javascript';
import { PRISMIC_API_URL } from 'config';

const getContentByType = async (types, params) => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);
    const response = await API.query(
      Prismic.Predicates.any("document.type", types), 
      { ...params }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getContentByUid = async (pageType, uid, params) => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);
    const response = await API.getByUID(pageType, uid, { ...params });
    return response;
  } catch (error) {
    return error;
  }
};

export { getContentByType, getContentByUid };
