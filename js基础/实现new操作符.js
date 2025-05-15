function mockNew(fn, ...args) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  const result = fn.apply(obj, args);
  return typeof result === 'object'? result : obj;
}


// 测试
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = mockNew(Person, 'Tom', 18);
console.log(person1)