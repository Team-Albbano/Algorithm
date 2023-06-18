const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  solution();
  process.exit();
});

let num = 0;

function solution() {
  const [n, r, c] = input[0].split(' ').map(Number);
  recurse(0, Math.pow(2, n) - 1, 0, Math.pow(2, n) - 1, r, c);
  console.log(num);
}

function recurse(xS, xE, yS, yE, x, y) {
  if (xS >= xE && yS >= yE) {
    return ;
  }
  const xM = Math.floor((xS + xE) / 2);
  const yM = Math.floor((yS + yE) / 2);
  if (x <= xM && y <= yM) {
    recurse(xS, xM, yS, yM, x, y);
  }
  if (x <= xM && y > yM) {
    num += Math.pow((xE - xM), 2);
    recurse(xS, xM, yM + 1, yE, x, y);
  }
  if (x > xM && y <= yM) {
    num += Math.pow((xE - xM), 2) * 2;
    recurse(xM + 1, xE, yS, yM, x, y);
  }
  if (x > xM && y > yM) {
    num += Math.pow((xE - xM), 2) * 3;
    recurse(xM + 1, xE, yM + 1, yE, x, y);
  }
}
