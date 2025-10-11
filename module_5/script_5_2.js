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

class User {
  #location;
  constructor({ name, email, age = 18, location = "World", password }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.#location = location;
    this.password = password;
  }
  sayHello() {
    console.log(this.name);
  }
  get locale() {
    return this.#location;
  }
  set locale(city) {
    const value = prompt("Enter Password");
    if (value === this.password) {
      this.#location = city;
    } else {
      console.log("No no no");
    }
  }
}

const test = new User({
  name: "UserA",
  email: "usera@gmail.com",
  location: "Oslo",
  password: "qwerty111",
});
const test2 = new User({
  name: "UserB",
  email: "userbgmail.com",
  age: 24,
});

console.log(test.locale);
test.locale = "Bergen";
console.log(test);
console.log(test2);
test.sayHello();
