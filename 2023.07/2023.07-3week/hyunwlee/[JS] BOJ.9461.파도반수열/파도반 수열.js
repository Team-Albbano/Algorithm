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

// 1 1 1
// 2 2
// 3
// 4
// 5
// 7
// 9
// d[n] = d[n - 2] + d[n - 3];
// d[1] = 1;
// d[2] = 1;
// d[3] = 1;
// d[4] = 2;
// d[5] = 2;
// d[6] = 3;
// d[7] = 4;
// d[8] = 5;
// d[9] = 7;
// d[10] = 9;
function solution() {
  let [t, ...arr] = input;
  let ans = '';
  arr.map(Number).forEach(num => {
    const memo = Array.from({length: 101}, _ => 0);
    ans += topDown(num, memo) + '\n';
  });
  console.log(ans);
}

function topDown(n, memo) {
  if (memo[n] > 0)
    return (memo[n]);
  if (n === 1)
    return (memo[1] = 1);
  if (n === 2)
    return (memo[2] = 1);
  if (n === 3)
    return (memo[3] = 1);
  memo[n] = topDown((n - 2), memo) + topDown((n - 3), memo);
  return memo[n];
}
