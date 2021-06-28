import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list/`,
  PICTURE: (pictureId) => `images/medium/${pictureId}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: `${CONFIG.BASE_URL}/search?q=query`,
  ADD_REVIEW: `review`,
};

export default API_ENDPOINT;
