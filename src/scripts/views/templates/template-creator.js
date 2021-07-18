import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.restaurant.name}</h2>
  <img
  class="restaurant__poster lazyload"
  data-src="${CONFIG.PICTURE + restaurant.restaurant.pictureId}"
  alt="${restaurant.restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.restaurant.address}</p>
    <h4>Description</h4>
    <p>${restaurant.restaurant.description} minutes</p>
  </div>
  <div id ="restaurant__menus" class="restaurant__menus">
  <h4>Menus</h4>
  <h5>Foods</h5>
  <div id ="food__menus" class="food__menus"></div>
  <h5>Drinks</h5>
  <div id ="drink__menus" class="drink__menus"></div>

  </div>
  <div class="restaurant__overview">
    <h3>Customer Reviews</h3>
    <div id ="customer__reviews" class="customer__reviews"></div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
      <div class="post-item__thumbnail">
        <img class="post-item__thumbnail lazyload"
          data-src="${CONFIG.PICTURE + restaurant.pictureId}"
          alt="restoran di kota ${restaurant.city}"
        />
        <div class="img-headline">
        Kota ${restaurant.city}
        </div>
      </div>
      <div class="post-item__content">
        <p class="post-item__date">
          Rating <a href="#" class="post-item__date__author">
          ${restaurant.rating}</a>
        </p>
        <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
        <p class="post-item__description">${restaurant.description}</p>
        <button
        onclick="window.location.href='${`/#/detail/${restaurant.id}`}'"
        class="readmore__button">
        Read More</button>
      </div>
    </article>
  `;

const createSaveButtonTemplate = () => `
    <button aria-label="save this restaurant" id="saveButton" class="save">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
     </button>
  `;

const createSavedButtonTemplate = () => `
    <button aria-label="remove this restaurant" id="saveButton" class="save">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createSaveButtonTemplate,
  createSavedButtonTemplate,
};
