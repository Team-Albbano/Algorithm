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

let blue = 0;
let white = 0;
function solution() {
  let [n, ...arr] = input;
  const ans = [0, 0];
  n = Number(n);
  const map = arr.map(line => {
    return line.split(' ').map(Number);
  });
  if (!isFull(0, n - 1, 0, n - 1, map))
    recurse(0, n - 1, 0, n - 1, map);
  console.log(white);
  console.log(blue);
}

function recurse(xs, xe, ys, ye, map) {
  if (xs > xe)
    return ;
  const xm = xs + Math.floor((xe - xs) / 2);
  const ym = ys + Math.floor((ye - ys) / 2);
  if (!isFull(xs, xm, ys, ym, map))
    recurse(xs, xm, ys, ym, map);
  if (!isFull(xs, xm, ym + 1, ye, map))
    recurse(xs, xm, ym + 1, ye, map);
  if (!isFull(xm + 1, xe, ys, ym, map))
    recurse(xm + 1, xe, ys, ym, map);
  if (!isFull(xm + 1, xe, ym + 1, ye, map))
    recurse(xm + 1, xe, ym + 1, ye, map);
}

function isFull(xs, xe, ys, ye, map) {
  let cntBlue = 0;
  let cntWhite = 0;
  for (let i = xs; i <= xe; ++i) {
    for (let j = ys; j <= ye; ++j) {
      if (map[i][j] === 1) 
        ++cntBlue;
      else
        ++cntWhite;
    }
  }
  if (cntBlue === Math.pow((xe - xs + 1), 2)) {
    ++blue;
    return true;
  }
  if (cntWhite === Math.pow((xe - xs + 1), 2)) {
    ++white;
    return true;
  }
  return false;
}
