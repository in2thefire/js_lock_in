const buttonEl = document.querySelector(".js-button");
const containerEl = document.querySelector(".js-container");
let step = 0;
containerEl.addEventListener("click", onClick);
function onClick(evt) {
  step += 10;
  containerEl.style.marginLeft = `${step}px`;
  console.log(evt);
}
