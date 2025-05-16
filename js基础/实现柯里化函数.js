function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curried.apply(this, [...args, ...moreArgs]);
      };
    }
  };
}


// 测试
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

// 支持多种调用方式
console.log(curriedAdd(1)(2)(3));    // 输出 6
console.log(curriedAdd(1, 2)(3));    // 输出 6
console.log(curriedAdd(1)(2, 3));    // 输出 6
console.log(curriedAdd(1, 2, 3));    // 输出 6