import API_ENDPOINT from './../globals/api-endpoint.js';

/**
Fetch from API
*/
class RestaurantsDBSource {
  /**
  Fetch List Restaurant
   */
  static async preferredRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  /**
  * @param {int} id ID for restaurant.
   */
  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    return response.json();
  }
}

export default RestaurantsDBSource;
