import SavedRestaurantIdb from './../../data/savedrestaurant-idb.js';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Saved = {
  async render() {
    return `
    <h2 class="content__heading">Saved Restaurants</h2>
    <div id="posts" class="posts">

    </div>
    `;
  },

  async afterRender() {
    const restaurants = await SavedRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
      createRestaurantItemTemplate(restaurant);
    });
    console.log(restaurants);
  },
};

export default Saved;
