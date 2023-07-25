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
let ans = 0;
function solution() {
  const [n, r, c] = input[0].split(' ').map(Number);
  recurse(0, Math.pow(2, n) - 1, 0, Math.pow(2, n) - 1, num,  r, c);
  console.log(ans);
}

function recurse(xS, xE, yS, yE, num, r, c) {
  if (xE - xS === 1 && yE - yS === 1) {
    if (xS === r && yS === c)
      ans = num;
    if (xS === r && yE === c)
      ans = num + 1;
    if (xE === r && yS === c)
      ans = num + 2;
    if (xE === r && yE === c)
      ans = num + 3;
    return ;
  }
  const xM = Math.floor((xS + xE) / 2)
  const yM = Math.floor((yS + yE) / 2)
  num += 4;
  recurse(xS, xM, yS, yM, num, r, c);
  recurse(xS, xM, yM + 1, yE, num, r, c);
  recurse(xM + 1, xE, yS, yM, num, r, c);
  recurse(xM + 1, xE, yM + 1, yE, num, r, c);
}
