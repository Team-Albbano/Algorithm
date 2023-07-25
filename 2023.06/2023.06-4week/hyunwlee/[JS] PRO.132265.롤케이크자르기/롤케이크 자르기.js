const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  process.exit();
});

/**
 * 시간초과 (brute fore)
 */
// function solution(topping) {
//  const n = topping.length - 1;
//  let ans = 0;
//  for (let i = 0; i < n; ++i) {
//    const chulsu = new Set();
//    const bro = new Set();
//    for (let j = 0; j <= i; ++j) {
//      chulsu.add(topping[j]);
//    }
//    for (let j = i + 1; j < topping.length; ++j) {
//      bro.add(topping[j]);
//    }
//    if (chulsu.size === bro.size)
//      ++ans;
//  }
//  console.log(ans);
// };

function solution(topping) {
  const min = (parametricSearchDown(0, topping.length - 1, topping, -1));
  const max = (parametricSearchUp(0, topping.length - 1, topping, -1));
  if (min === -1 && max === -1) {
    return (0);
  }
  return (max - min + 1);
}

function parametricSearchUp(start, end, topping, result) {
  if (start > end) {
    return result;
  }
  const mid = Math.floor((start + end) / 2);
  const chulsu = new Set();
  const bro = new Set();
  for (let i = 0; i <= mid; ++i)
    chulsu.add(topping[i]);
  for (let i = mid + 1; i < topping.length; ++i)
    bro.add(topping[i]);
  if (chulsu.size <= bro.size) {
    if (chulsu.size === bro.size)
      result = mid;
    return parametricSearchUp(mid + 1, end, topping, result);
  }
  else {
    return parametricSearchUp(start, mid - 1, topping, result);
  }
}

function parametricSearchDown(start, end, topping, result) {
  if (start > end) {
    return result;
  }
  const mid = Math.floor((start + end) / 2);
  const chulsu = new Set();
  const bro = new Set();
  for (let i = 0; i <= mid; ++i)
    chulsu.add(topping[i]);
  for (let i = mid + 1; i < topping.length; ++i)
    bro.add(topping[i]);
  if (chulsu.size >= bro.size) {
    if (chulsu.size === bro.size)
      result = mid;
    return parametricSearchDown(start, mid - 1, topping, result);
  }
  else {
    return parametricSearchDown(mid + 1, end, topping, result);
  }
}
// console.log(solution([1, 2, 1, 2, 1, 2]));
// console.log(solution([1, 1, 1, 1, 2, 2, 2, 2]));
// console.log(solution([1, 2, 1, 2, 1, 2]));
// console.log(solution([1, 1, 1, 1, 2, 2, 2, 2]));
console.log(solution([1, 2, 1, 2, 3, 4]));
// console.log(solution([1, 1, 1, 1, 1, 1, 1, 1]));
