import { containerDiv } from "./index";

function render(){
  const footer = document.createElement('footer');

  const footerText = document.createElement('p');
  footerText.innerText = 'Copyright 2021';

  footer.appendChild(footerText);

  return containerDiv.appendChild(footer);
}

export { render as renderFooter };