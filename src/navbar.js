import { containerDiv } from "./index";

function render() {
  const navItems = ['home', 'menu', 'about'];
  const ul = document.createElement('ul');
  const nav = document.createElement('nav')

  navItems.forEach( (item) => { 
    const li = document.createElement('li');
    li.innerText = `${item}`;
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  return containerDiv.appendChild(nav);

}

export { render as renderNav };