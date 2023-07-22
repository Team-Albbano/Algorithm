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
  let [n, ...lines] = input;
  n = Number(n);
  lines = lines.map(line => line.split(' ').map(Number));
  for (let k = 0; k < n; ++k) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        if (lines[i][k] === 1 && lines[k][j] === 1) {
          lines[i][j] = 1;
        }
      }
    }
  }
  let s = '';
  lines.forEach(line => {
    s += line.join(' ') + '\n';
  })
  console.log(s);
}

// i에서 k로 가는 경우와 k에서 j로 가는 경우가 있다?
// arr[i][k] && arr[k][j]

