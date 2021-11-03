import { containerDiv } from "./index";

function render(){
  const content = document.createElement('div');
  const innerDiv = document.createElement('div');
  const titleContent = document.createElement('h3');
  const textContent = document.createElement('p');

  content.classList.add('content');
  innerDiv.classList.add('inner-text');
  titleContent.innerText = 'Welcome to La Pâtisserie, from-scratch French pastry shop';
  innerDiv.appendChild(titleContent);
  textContent.innerText = 'Inspired by a trip to France many years ago, our 2 locations offer macarons, croissants and other classic French pastries. All items are made from scratch, by hand, everyday, using authentic French techniques. Visit the stores, or order online (in-store pickup, curbside delivery or drive-through available).'
  innerDiv.appendChild(textContent);

  content.appendChild(innerDiv);
  
  return containerDiv.appendChild(content);
}

export { render as renderAbout };