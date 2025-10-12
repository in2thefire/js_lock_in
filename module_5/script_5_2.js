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

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    if (!this.items.includes(newItem)) {
      this.items.push(newItem);
    }
  }
  removeItem(itemToRemove) {
    if (this.items.includes(itemToRemove)) {
      this.items = this.items.filter((i) => i !== itemToRemove);
    }
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
