import _ from 'lodash';
import './style.css';
import { renderNav } from './navbar';
import { renderFooter } from './footer';

const containerDiv = document.querySelector('.container');

renderNav();
renderFooter();

export { containerDiv };