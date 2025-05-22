// 1. 使用set
function uniqueArray(arr) {
  return [...new Set(arr)];
}

// 2. 使用filter
function uniqueArray2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}


// 测试
const array = [1, 2, 3, 4, 4, 3, 2, 1];
const unique = uniqueArray(array);
const unique2 = uniqueArray2(array);
console.log(unique); // 输出: [1, 2, 3, 4]
console.log(unique2); // 输出: [1, 2, 3, 4]
