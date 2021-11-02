import _ from 'lodash';
import './style.css';
import { renderNav } from './navbar'; 

const containerDiv = document.querySelector('.container');

renderNav();

export { containerDiv };