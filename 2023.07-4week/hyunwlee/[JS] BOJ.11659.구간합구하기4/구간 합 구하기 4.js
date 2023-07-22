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
  let [_, arr, ...q] = input;
  let sum = 0;
  arr = arr.split(' ').map(item => {
    return sum += Number(item);
  });
  let ans = '';
  q.forEach(item => {
    const [i, j] = item.split(' ').map(Number);
    if (i === 1)
      ans += arr[j - 1] + '\n';
    else
      ans += arr[j - 1] - arr[i - 2] + '\n';
  });
  console.log(ans);
}
