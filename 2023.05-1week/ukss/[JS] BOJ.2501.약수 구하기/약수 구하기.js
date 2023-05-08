const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let yaksu = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    yaksu.push(Math.floor(N / i));
  }
}

yaksu.sort((a, b) => {
  return a - b;
});

console.log(yaksu[K - 1] ? yaksu[K - 1] : 0);
