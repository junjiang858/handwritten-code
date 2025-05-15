Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  args = args ? args : [];
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}


// 测试
const obj = { name: "Alice" };
function showName() { console.log(this.name); }

showName.myCall(obj); // 输出 "Alice"
