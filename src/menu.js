import { containerDiv } from "./index";
import Croissant from './croissant.jpg';
import Loaf from './loaf.jpg';
import Macarons from './macarons.jpg';

function render() {
  const menu = document.createElement('div');
  const gallery = document.createElement('div');
  const imgFirst = new Image();
  imgFirst.src = Croissant;
  imgFirst.classList.add('menu-img');
  const imgSecond = new Image();
  imgSecond.src = Loaf;
  imgSecond.classList.add('menu-img');
  const imgThird = new Image();
  imgThird.src = Macarons;
  imgThird.classList.add('menu-img');

  menu.classList.add('content');
  gallery.classList.add('menu-gallery');

  gallery.appendChild(imgFirst);
  gallery.appendChild(imgSecond);
  gallery.appendChild(imgThird);

  menu.appendChild(gallery);
  
  return containerDiv.appendChild(menu);
}

export { render as renderMenu };