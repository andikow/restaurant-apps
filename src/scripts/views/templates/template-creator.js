import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.poster_path}" alt="${restaurant.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurant.tagline}</p>
    <h4>Release Date</h4>
    <p>${restaurant.release_date}</p>
    <h4>Duration</h4>
    <p>${restaurant.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${restaurant.overview}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
      <div class="post-item__thumbnail">
        <img class="post-item__thumbnail"
          src="${restaurant.pictureId}"
          alt="Gambar restoran di kota ${restaurant.city}"
        />
        <div class="img-headline">
        Kota ${restaurant.city}
        </div>
      </div>
      <div class="post-item__content">
        <p class="post-item__date">
          Rating <a href="#" class="post-item__date__author">${restaurant.rating}</a>
        </p>
        <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
        <p class="post-item__description">${restaurant.description}</p>
        <button class="readmore__button">Read More</button>
      </div>
    </article>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
