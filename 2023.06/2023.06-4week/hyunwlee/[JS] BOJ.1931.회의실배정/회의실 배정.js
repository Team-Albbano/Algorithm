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
  const [n, ...arr] = input;
  const processedArr = arr.map(item => {
    return item.split(' ').map(Number);
  }).sort((a, b) => {
    if (a[1] === b[1])
      return a[0] - b[0];
    return a[1] - b[1];
  });
  let ans = 0;
  let time = 0;
  processedArr.forEach(item => {
    if (time <= item[0]) {
      ++ans;
      time = item[1];
    }
  });
  console.log(ans);
}
