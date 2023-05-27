const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(size, target) {
  const queue = new Array(size).fill().map((_, i) => i + 1);
  const josephus = [];
  let cnt = 1;

  while (queue.length) {
    const shiftItem = queue.shift();
    if (cnt % target === 0) {
      josephus.push(shiftItem);
      cnt = 1;
    } else {
      queue.push(shiftItem);
      cnt++;
    }
  }

  console.log(`<${josephus.join(', ')}>`);
}

solution(N, K);
