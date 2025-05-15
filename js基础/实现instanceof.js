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