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

function solution() {
  const [t, ...arr] = input;
  const memo = Array.from({length: 11}, _ => 0);
  let ans = '';
  arr.forEach(item => {
    ans += topDown(Number(item), memo) + '\n'
  });
  console.log(ans);
}

//  10
//  9 + 1
//  8 + 2
//  7 + 3

// d[n] = d[n - 1] + 1 + d[n - 2] + 1 d[n - 3] + 1;
function topDown(n, memo) {
  if (memo[n] > 0)
    return memo[n];
  if (n === 0)
    return (0);
  if (n === 1)
    return (memo[1] = 1);
  if (n === 2)
    return (memo[2] = 2);
  if (n === 3)
    return (memo[3] = 4);
  // 1
  // 1 => 1

  // 2
  // 1 + 1
  // 2 => 2

  // 3
  // 1 + 1 + 1
  // 2 + 1
  // 1 + 2
  // 3 => 4
  memo[n] = topDown((n - 1), memo) + topDown((n - 2), memo) + topDown((n - 3), memo);
  return memo[n];
}
