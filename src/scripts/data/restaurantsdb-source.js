import API_ENDPOINT from './../globals/api-endpoint.js';

class RestaurantsDBSource {
  static async preferredRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantsDBSource;
