const [M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let sosu = [];

const sosuCheck = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = M; i <= N; i++) {
  sosuCheck(i) && sosu.push(i);
}

let sumResult = sosu.reduce((sum, cur) => sum + cur, 0);
let minResult = Math.min(...sosu);
console.log(sosu.length ? `${sumResult}\n${minResult}` : -1);
