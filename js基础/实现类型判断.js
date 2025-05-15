function mockType(target) {
  if (target === null) {
    return 'null';
  }

  if (typeof target === 'object') {
    let valueClass = Object.prototype.toString.call(target);
    let valueStr = valueClass.split(" ")[1];
    let type = valueStr.slice(0, valueStr.length - 1)
    return type.toLowerCase();
  } else {
    return typeof target;
  }
}


// 测试
console.log(mockType({}));
console.log(mockType([]));
console.log(mockType(undefined));
console.log(mockType(10));