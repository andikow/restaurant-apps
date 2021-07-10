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
    if (restaurants.length == 0) {
      restaurantsContainer.innerHTML += `
      <h4 class="restaurant_not_found">No Saved Restaurant</h4>
      `;
    }
    console.log(restaurants.length);
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
      createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Saved;
