const user = {
  name: "test name",
  age: 24,
  sayHello() {
    console.log(this.name);
  },
  sayAge() {
    console.log(`My age is ${this.age}`);
  },
};

const user1 = Object.create(user);
user1.sayHello();
console.log("user1", user1);
const user2 = Object.create(user);
user2.sayAge();
console.log("user2", user2);
