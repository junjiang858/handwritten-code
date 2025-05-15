function throttle(fn, millisecond) {
  let start = 0; // 第一次立刻执行
  return function(...args) {
    let now = Date.now();
    if (now - start >= millisecond) {
      fn.apply(this, args); // 这里的this指向调用该闭包函数时的上下文对象
      start = now;
    }
  }
}


// 测试
let fn = () => {
  console.log("执行了");
}
setInterval(throttle(fn, 1000), 1000);