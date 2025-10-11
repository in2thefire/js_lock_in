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
  constructor(name, email, age = 18) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

const test = new User("user A", "test@gmail.com");
console.log(test);
