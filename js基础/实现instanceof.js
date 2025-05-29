/**
 * `instanceof`的核心是检查实例的原型链是否包含构造函数的原型
 */
function mockInstanceof(left, fn) {
  let proto = Object.getPrototypeOf(left);
  let prototype = fn.prototype;
  while (proto !== null) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}


// 测试
console.log(mockInstanceof(10, Array));
console.log(mockInstanceof([], Object));