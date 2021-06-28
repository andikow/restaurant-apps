import Detail from '../views/pages/detail.js';
import Preferred from './../views/pages/preferred.js';
import Reviews from './../views/pages/reviews.js';
import Saved from './../views/pages/saved.js';

const routes = {
  '/': Preferred, // default page
  '/preferred': Preferred,
  '/reviews': Reviews,
  '/saved': Saved,
  '/detail/:id': Detail,
};

export default routes;
