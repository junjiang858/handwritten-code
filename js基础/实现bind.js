Function.prototype.myBind = function (context, ...args) {
  context  = context || window;
  args = args || [];
  let self = this;
  let newFn = function() {}; // 空函数做中转
  let bindFn = function(...innerArgs) {
    return self.apply(this instanceof self ? this : context, [...args, ...innerArgs]);
  }
  newFn.prototype = self.prototype;
  bindFn.prototype = new newFn(); // 创建新实例，该新实例的原型指向原原型（self.prototype），从而实现原型链继承并隔离了原型链
  return bindFn;
}


// 测试
// 1. 作为构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const createPerson = Person.myBind(null, 'Alice');

const person1 = new createPerson(25);
console.log('_____作为构造函数_____'); // this指向新创建的实利对象
console.log(person1.name); // 输出: Alice
console.log(person1.age);  // 输出: 25


// 2. 作为普通函数
const obj = { name: 'Bob' }; // 绑定的目标对象
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const boundGreet = greet.myBind(obj, 'Hello'); // this指向绑定的目标对象
const result = boundGreet('!');
console.log('_____作为普通函数_____');
console.log(result); // 输出：Hello, Bob!
