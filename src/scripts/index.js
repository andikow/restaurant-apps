import 'regenerator-runtime'; /* for async await transpile */

import './../styles/main.css';
import './../styles/responsive.css';
import logo from './../public/images/logo.png';

import App from './views/app';

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
