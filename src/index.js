import _ from 'lodash';
import './style.css';
import { renderNav } from './navbar';
import { renderHome } from './main-home';
import { renderFooter } from './footer';

const containerDiv = document.querySelector('.container');

renderNav();
renderHome();
renderFooter();

export { containerDiv };