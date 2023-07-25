const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
  process.exit();
});

// @ts-check

let ans = Infinity;

function solution() {
  const n = +input[0];
  recurse(0, 0, n);
  if (ans === Infinity) {
    console.log('-1');
    return ;
  }
  console.log(ans);
}

/**
 * 
 * @param {number} depth 봉지의 개수
 * @param {number} cur 현재 쓰인 봉지의 개수
 * @param {number} target 배달해야할 설탕 무게
 * @returns void 
 */
function recurse(depth, cur, target) {
  if (ans !== Infinity) return ;
  if (cur > target) return ;
  if (cur === target) {
    ans = Math.min(depth, ans);
    return ;
  }
  recurse(depth + 1, cur + 5, target);
  recurse(depth + 1, cur + 3, target); 
}

// function recurse(depth, cur, target) {
//   if (cur > target) return ;
//   if (cur === target) {
//     ans = Math.min(depth, ans);
//     return ;
//   }
//   recurse(depth + 1, cur + 3, target); 
//   recurse(depth + 1, cur + 5, target);
// }