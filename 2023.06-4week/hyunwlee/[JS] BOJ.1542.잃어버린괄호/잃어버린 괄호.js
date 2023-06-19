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
  const s = input[0];
  const nums = [];
  let i = 0;
  while (i < s.length)
  {
    let j = i;
    let num = '';
    while (j < s.length && s[j] !== '-')
      num += s[j++];
    nums.push(num);
    if (j >= s.length)
      break;
    i = j + 1;
  }
  let ans = 0;
  ans = nums[0].split('+').map(Number).reduce((cal, cur) => (cal + cur), 0);
  for (let i = 1; i < nums.length; ++i) {
    const sum = nums[i].split('+').map(Number).reduce((cal, cur) => (cal + cur), 0);
    ans -= sum;
  }
  console.log(ans);
}
