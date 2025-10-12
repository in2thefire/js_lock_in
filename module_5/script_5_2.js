// const user = {
//   name: "test name",
//   age: 24,
//   sayHello() {
//     console.log(this.name);
//   },
//   sayAge() {
//     console.log(`My age is ${this.age}`);
//   },
// };

// const user1 = Object.create(user);
// user1.sayHello();
// console.log("user1", user1);
// const user2 = Object.create(user);
// user2.sayAge();
// console.log("user2", user2);

// const user = {
//   name: "test name",
//   sayHello() {
//     console.log(this.name);
//   },
// };

// const admin = Object.create(user);
// admin.age = 19;
// admin.showAge = function () {
//   console.log(this.age);
// };
// // console.log(admin);

// const practiceOwner = Object.create(admin);
// practiceOwner.name = "Owner";
// practiceOwner.sayHello();

// class User {
//   static counter = 0;
//   static addUser() {
//     this.counter += 1;
//     console.log(`Number of users : ${this.counter}`);
//     // User.counter += 1;
//   }
//   #location;
//   constructor({ name, email, age = 18, location = "World", password }) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.#location = location;
//     this.password = password;
//     User.addUser();
//   }
//   sayHello() {
//     console.log(this.name);
//   }
//   #getEmail() {
//     console.log(this.email);
//   }
//   get locale() {
//     return this.#location;
//   }
//   set locale(city) {
//     const value = prompt("Enter Password");
//     if (value === this.password) {
//       this.#location = city;
//     } else {
//       console.log("No no no");
//     }
//   }
// }
// class Human extends User {
//   constructor({ name, age, location, email, password, gun }) {
//     super({ name, age, location, email, password });
//     this.gun = gun;
//   }
//   shoot() {
//     console.log(`Human shoot you with ${this.gun}`);
//   }
// }
// class Avatar extends User {
//   constructor({ name, age, location, email, password, damage }) {
//     super({ name, age, location, email, password });
//     this.damage = damage;
//   }
//   attack() {
//     console.log(`Attack with damage ${this.damage}`);
//   }
// }
// class Dragon extends Avatar {
//   constructor({ name, age, location, email, password, damage }) {
//     super({ name, age, location, email, password, damage });
//   }
// }
// const avatar = new Avatar({
//   name: "UserA",
//   email: "usera@gmail.com",
//   location: "Oslo",
//   password: "qwerty111",
//   damage: 700,
// });
// const human = new Human({
//   name: "UserB",
//   email: "userbgmail.com",
//   age: 24,
//   gun: "M4A4",
// });
// const dragon = new Dragon({
//   name: "Userc",
//   email: "userc@gmail.com",
//   location: "Oslo",
//   password: "qwerty111",
//   damage: 1000,
// });
// console.log(test.locale);
// test.locale = "Bergen";
// console.log(avatar);
// console.log(human);
// avatar.attack();
// human.shoot();

// console.log(dragon);
// console.log(test2);
// test.sayHello();
// console.log(test.constructor.counter);

// class Bloger {
//   constructor({ email, age, numbersOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numbersOfPosts = numbersOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numbersOfPosts} posts.`;
//   }
//   updatePostCount(value) {
//     this.numbersOfPosts += value;
//   }
// }

// const mango = new Bloger({
//   email: "mango@gmail.com",
//   age: 24,
//   numbersOfPosts: 12,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango);

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//     } else {
//       console.log(`У вас уже є ${item}`);
//     }
//   }
//   removeItem(item) {
//     this.items = this.items.filter((i) => i !== item);
//     // const index = this.items.indexOf(item);
//     // if (index !== -1) {
//     //   this.items.splice(index, 1);
//     // }
//   }
// }
// const storage = new Storage(["🍎", "🍐", "🍊", "🍇"]);

// console.log(storage.getItems());
// storage.addItem("🍑");
// storage.removeItem("🍎");
// console.log(storage.getItems());

// storage.addItem("🍐");

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     if (this.login !== newLogin) {
//       this.#login = newLogin;
//     }
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (this.email !== newEmail) {
//       this.#email = newEmail;
//     }
//   }
// }

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     if (!this.items.includes(newItem)) {
//       this.items.push(newItem);
//     }
//   }
//   removeItem(itemToRemove) {
//     if (this.items.includes(itemToRemove)) {
//       this.items = this.items.filter((i) => i !== itemToRemove);
//     }
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    } else {
      return "Success! Price is within acceptable limits";
    }
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
