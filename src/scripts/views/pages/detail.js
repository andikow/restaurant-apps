import UrlParser from '../../routes/url-parser';
import RestaurantsDBSource from './../../data/restaurantsdb-source.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import SaveButtonInitiator from './../../utils/save-button-initiator.js';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="saveButtonContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsDBSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    let foodsContainer = document.querySelector('#food__menus');
    restaurant.restaurant.menus.foods.forEach((food) => {
     foodsContainer.innerHTML += `
        <p>${food.name}</p>
     `;
    });

    let drinksContainer = document.querySelector('#drink__menus');
    restaurant.restaurant.menus.drinks.forEach((drinks) => {
     drinksContainer.innerHTML += `
        <p>${drinks.name}</p>
     `;
    });

    let reviewsContainer = document.querySelector('#customer__reviews');
    restaurant.restaurant.customerReviews.forEach((review) => {
     reviewsContainer.innerHTML += `
        <p>${review.name}</p>
        <p>${review.review}</p>
        <p>${review.date}</p>
     `;
    });

    SaveButtonInitiator.init({
          saveButtonContainer: document.querySelector('#saveButtonContainer'),
          restaurant : {
            id: restaurant.id,
            title: restaurant.title,
            description: restaurant.description,
          },
    });
  },
};

export default Detail;
