let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const constructor = [];

function brute(n) {
  const N = n.toString().split('').map(Number);
  return n + N.reduce((acc, cur) => acc + cur, 0);
}

for (let i = 1; i <= input; i++) {
  if (brute(i) === input) {
    constructor.push(i);
  }
}

console.log(constructor.length ? Math.min(...constructor) : 0);
