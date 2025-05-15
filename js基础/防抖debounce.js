function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args); // 这里的this指向调用该闭包函数时的上下文对象
    }, delay);
  }
}


// 测试
let fn = () => {
  console.log('fffffff');
}
setInterval(debounce(fn, 500), 1000);