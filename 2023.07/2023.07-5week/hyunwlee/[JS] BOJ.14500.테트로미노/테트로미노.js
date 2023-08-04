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
  const [nm, ...arr] = input;
  const [n, m] = nm.split(' ').map(Number);
  const map = arr.map(lines => 
    lines.split(' ').map(Number)
  );
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      // oxxx
      if (j + 3 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i][j + 3];
        sum = Math.max(sum, value);
      } 
      // o
      // x
      // x
      // x
      if (i + 3 < n) {
        const value = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 3][j];
        sum = Math.max(sum, value);
      }
      // ox
      // xx
      if (i + 1 < n && j + 1 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i + 1][j] + map[i + 1][j + 1];
        sum = Math.max(sum, value);
      }
      // o 
      // x 
      // xx
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 2][j + 1];
        sum = Math.max(sum, value);
      }
      //  o
      //  x
      // xx
      if (i + 2 < n && j - 1 >= 0) {
        const value = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 2][j - 1];
        sum = Math.max(sum, value);
      }
      // oxx
      // x
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j];
        sum = Math.max(sum, value);
      }
      // oxx
      //   x
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j + 2];
        sum = Math.max(sum, value);
      }
      // ox
      //  x
      //  x
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 2][j + 1];
        sum = Math.max(sum, value);
      }
      // ox
      // x
      // x
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i + 1][j] + map[i + 2][j];
        sum = Math.max(sum, value);
      }
      //   x
      // oxx
      if (i - 1 >= 0 && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i - 1][j + 2];
        sum = Math.max(sum, value);
      }
      // o
      // xxx
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 1][j + 2];
        sum = Math.max(sum, value);
      }
      // ox
      //  xx
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 1][j + 2];
        sum = Math.max(sum, value);
      }
      //  xx
      // ox
      if (i - 1 >= 0 && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i - 1][j + 1] + map[i - 1][j + 2];
        sum = Math.max(sum, value);
      }
      //  o
      // xx
      // x
      if (i + 2 < n && j - 1 >= 0) {
        const value = map[i][j] + map[i + 1][j] + map[i + 1][j - 1] + map[i + 2][j - 1];
        sum = Math.max(sum, value);
      }
      // o
      // xx
      //  x
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 2][j + 1];
        sum = Math.max(sum, value);
      }
      // oxx
      //  x
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j + 1];
        sum = Math.max(sum, value);
      }
      //  o
      // xx
      //  x
      if (i + 2 < n && j - 1 >= 0) {
        const value = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 1][j - 1];
        sum = Math.max(sum, value);
      }
      //  x
      // oxx
      if (i - 1 >= 0 && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i - 1][j + 1];
        sum = Math.max(sum, value);
      }
      // o
      // xx 
      // x
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 2][j];
        sum = Math.max(sum, value);
      }
    }
  }
  console.log(sum);
}
