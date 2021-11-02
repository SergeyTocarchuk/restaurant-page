import { containerDiv } from "./index";

function render() {
  const content = document.createElement('div');
  const welcome = document.createElement('h3');
  const restaurantName = document.createElement('h1');

  content.classList.add('content');
  welcome.innerText = 'bienvenue';
  restaurantName.innerText = 'la pâtisserie';

  content.appendChild(welcome);
  content.appendChild(restaurantName);
  
  return containerDiv.appendChild(content);
}

export { render as renderHome };