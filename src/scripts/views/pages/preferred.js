import RestaurantsDBSource from './../../data/restaurantsdb-source.js';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Preferred = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">List Restaurants</h2>
      <div id="restaurants" class="restaurants">

      </div>
    </div>
    `;
  },

  async afterRender() {
    let restaurants = await RestaurantsDBSource.preferredRestaurants();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
       restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Preferred;
