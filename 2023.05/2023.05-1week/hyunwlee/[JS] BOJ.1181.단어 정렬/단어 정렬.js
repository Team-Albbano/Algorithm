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
  input.shift();
  const set = new Set(input);
  const arr = [];
  set.forEach((item) => {
    arr.push(item);
  });
  arr.sort((a, b) => {
    if (a.length < b.length) return -1;
    else if (a.length > b.length) return 1;
    else {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
  });
  arr.forEach((item) => {
    console.log(item);
  });
}
