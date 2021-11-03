import _ from 'lodash';
import './style.css';
import { renderNav } from './navbar';
import { renderHome } from './main-home';
import { renderFooter } from './footer';
import { renderAbout } from './about';

const containerDiv = document.querySelector('.container');

function home(){
  containerDiv.innerHTML = "";
  renderNav();
  renderHome();
  renderFooter();
}

function about(){
  containerDiv.innerHTML = "";
  renderNav();
  renderAbout();
  renderFooter();
}

home();

document.addEventListener('click', (e) => {
  const target = e.target.innerText;

  if( target === "HOME" ) home();
  if( target === "ABOUT" ) about();
})

export { containerDiv };