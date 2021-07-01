import RestaurantsDBSource from './../../data/restaurantsdb-source.js';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Preferred = {
  async render() {
    return `
      <h2 class="content__heading">List Restaurants</h2>
      <div id="posts" class="posts">

      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsDBSource.preferredRestaurants();
    const restaurantsContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
      createRestaurantItemTemplate(restaurant);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Preferred;
