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
  const arr = Array.from(Array(Math.pow(2, n)), _ => Array(Math.pow(2, n)).fill(0));
  recurse(arr, 0, arr.length - 1, 0, arr[0].length - 1);
  console.log( arr[r][c]);

}

function recurse(arr, xS, xE, yS, yE) {
  if (xE - xS === 1 && yE - yS === 1) {
    arr[xS][yS] = num++;
    arr[xS][yE] = num++;
    arr[xE][yS] = num++;
    arr[xE][yE] = num++;
    return ;
  }
  const xM = Math.floor((xS + xE) / 2)
  const yM = Math.floor((yS + yE) / 2)
  recurse(arr, xS, xM, yS, yM);
  recurse(arr, xS, xM, yM + 1, yE);
  recurse(arr, xM + 1, xE, yS, yM);
  recurse(arr, xM + 1, xE, yM + 1, yE);
}
