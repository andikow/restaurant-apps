import 'regenerator-runtime'; /* for async await transpile */

import './../styles/main.css';
import './../styles/responsive.css';
import logo from './../public/images/logo.png';

import App from './views/app';

import data from './../DATA.json';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

document.getElementById("header__inner").innerHTML +=`<img src='${logo}' class="logo"/>`;

  let posts = document.getElementById("posts");
  data.restaurants.forEach((resto) => {
    posts.innerHTML += `
        <article class="post-item">
          <div class="post-item__thumbnail">
            <img class="post-item__thumbnail"
              src="${resto.pictureId}"
              alt="Gambar restoran di kota ${resto.city}"
            />
            <div class="img-headline">
            Kota ${resto.city}
            </div>
          </div>
          <div class="post-item__content">
            <p class="post-item__date">
              Rating <a href="#" class="post-item__date__author">${resto.rating}</a>
            </p>
            <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>
            <p class="post-item__description">${resto.description}</p>
            <button class="readmore__button">Read More</button>
          </div>
        </article>
    `;
  });
