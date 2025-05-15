function deepClone(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}

// 测试
let obj1 = { a: 1, b: { c: 1 } }
let obj2 = deepClone(obj1);
obj1.a = 2
obj1.b.c = 3
console.log(obj1)
console.log(obj2)
