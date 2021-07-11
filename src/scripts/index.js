import 'regenerator-runtime'; /* for async await transpile */

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './../styles/main.css';
import './../styles/responsive.css';
import logo from './../public/images/logo.png';

import App from './views/app';
import swRegister from './utils/sw-register.js';

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
  swRegister();
});

document.getElementById('header__inner').innerHTML +=`
<img src='${logo}' class="logo"/>
`;
