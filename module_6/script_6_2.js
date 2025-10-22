// buttonEl.addEventListener("click", onTargetButtonClick); //,targetButtonClickHandler); ,handleTargetButtonClick);

// function handleTargetButtonClick(event) {
//   console.log("Clock");
// }

// function targetButtonClickHandler(event) {
//   console.log("Clock");
// }

// function onTargetButtonClick(event) {
//   console.log("Clock");
// }

// const title = document.querySelector(".js-title");
// const title1 = document.querySelector(".js-title1");
// const title2 = document.querySelector(".js-title2");
// title.addEventListener("click", onClick);
// title1.addEventListener("click", onClick);
// title2.addEventListener("click", onClick);

// const maxLength = 13;
// const totalLength = maxLength + 3;

// function onClick(evt) {
//   const title = evt.currentTarget;
//   const str = title.textContent.slice(0, maxLength);

//   if (title.textContent.length > totalLength) {
//     const remainder = title.textContent.slice(maxLength);
//     title.setAttribute("data-title", remainder);
//     title.textContent = str + "...";
//   } else {
//     const remainder = title.dataset["title"];
//     console.log(title.dataset["title"]);
//     console.log(title.dataset.title);
//     if (remainder) {
//       title.textContent = str + remainder;
//     }
//     // getAttribute
//   }
// }

const formEl = document.querySelector(".js-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { userName, userEmail, userAge } = evt.currentTarget.elements;
  const data = {
    name: userName.value,
    email: userEmail.value,
    age: userAge.value,
  };
  console.log(data);
}
