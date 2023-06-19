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

let ans = 0;
function solution(numbers, target) {
  recurse(0, 0, target, numbers);
  return ans;
}

function recurse(depth, cur, target, numbers) {
  if (depth === numbers.length) {
    if (cur === target)
      ++ans;
    return ;
  }
  recurse(depth + 1, cur - numbers[depth], target, numbers);
  recurse(depth + 1, cur + numbers[depth], target, numbers);
}

// console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
