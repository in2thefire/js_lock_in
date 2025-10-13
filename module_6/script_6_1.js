const title = document.querySelector(".js_title");
console.dir(title.textContent);
title.textContent = "Hello Js";
console.dir(title.classList);

title.classList.add("title-color");
title.classList.remove("title-color");
title.classList.toggle("title-color");
