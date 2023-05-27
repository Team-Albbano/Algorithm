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
  const arr = input.splice(1)
                   .map(info => [...info.split(' ').map(Number), 1]);
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      if (i === j) continue;
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1])
        ++arr[i][2];
    }
  }
  console.log(arr.map(item => item[2]).join(' '));
}