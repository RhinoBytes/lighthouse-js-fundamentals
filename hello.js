/*
const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("doug");
*/
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('john');
console.log(greeting);