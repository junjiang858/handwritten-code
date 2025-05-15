function mockCreate(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
}


// 测试
let Person = {
  name: 'xiaomin',
  age: 10
};
let boy = mockCreate(Person);
console.log(boy);
console.log(boy.name)