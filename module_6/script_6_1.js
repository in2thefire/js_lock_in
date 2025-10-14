// const title = document.querySelector(".js_title");
// console.dir(title.textContent);
// title.textContent = "Hello Js";
// console.dir(title.classList);

// title.classList.add("title-color");
// title.classList.remove("title-color");
// title.classList.toggle("title-color");

// console.log(title.getAttribute("data-id"));

// // const li = document.createElement("li");
// // li.textContent = list.children.length + 1;
// // list.append(li);
// // console.log(li);
// console.dir(list.children);

// const li = `<li class = "title-color" data-id ="1234">${
//   list.children.length + 1
// }<div><h2>Hello</h2></div></li>`;
// list.insertAdjacentHTML("beforeend", li);
// const listStatic = document.querySelectorAll("li");
// const listDinamic = document.getElementsByTagName("li");
// const list = document.querySelector(".js-list");

// const li = document.createElement("li");
// li.textContent = list.children.length + 1;
// list.append(li);

// console.log(listStatic);
// console.log(listDinamic);

const cars = [
  {
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://tinyurl.com/ywmaf3ww",
  },
  {
    id: 2, // Додав id
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://tinyurl.com/mr2khnxm",
  },
];

const container = document.querySelector(".js-container");
const markup = cars
  .map(
    ({ id = "none", model, type, price, img }) =>
      `<li data-id="${id}">
        <img src="${img}" alt="${model} ${type}" class="img" />
        <h2>Марка - ${model}</h2>
        <h3>Модель - ${type}</h3>
        <p>Ціна - ${price}</p></li>`
  )
  .join("");
console.log(markup);
container.insertAdjacentHTML("beforeend", markup);

const containerAfter = document.querySelector(".js-container");
[...containerAfter.children].forEach((item) => {
  if (item.dataset.id !== "none") {
    //  - видаляємо тільки елементи з id
    item.remove();
  }
});
// containerAfter.innerHTML = ""; -- видалити всі елементи в списку
