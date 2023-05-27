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

// @ts-check

function solution() {
  const [n, m] = input[0].split(' ').map(Number);
  console.log(gcd(n, m));
  console.log(lcm(n, m));
}

/**
 * 
 * @param {number} n 
 * @param {number} m 
 * @returns number
 */
function gcd(n, m) {
  const min = Math.min(n, m);
  for(let i = min; i >= 2; --i) {
    if (n % i === 0 && m % i === 0)
      return i;
  }
  return 1;
}

/**
 * @param {number} n 
 * @param {number} m 
 * @returns number
 */
function lcm(n, m) {
  const val = gcd(n, m);
  return (val * (n / val) * (m / val));
}