import { containerDiv } from "./index";
import Restaurant from './restaurant.jpg';

function render() {
  const content = document.createElement('div');
  const welcome = document.createElement('h3');
  const restaurantName = document.createElement('h1');
  // add restaurant image on Home page
  const image = new Image();
  image.src = Restaurant;
  image.classList.add('main-img');

  const menuButton = document.createElement('button');

  content.classList.add('content');
  welcome.innerText = 'bienvenue';
  restaurantName.innerText = 'la pâtisserie';
  
  menuButton.innerText = 'menu';

  content.appendChild(welcome);
  content.appendChild(restaurantName);
  content.appendChild(image);
  content.appendChild(menuButton);

  return containerDiv.appendChild(content);
}

export { render as renderHome };