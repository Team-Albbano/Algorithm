const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const testCaseCnt = +input.splice(0, 1);

while (input.length) {
  const testCase = input.splice(0, 2);
  const [N, M] = testCase[0].split(' ').map(Number);
  const queue = new Array(N).fill().map((_, i) => testCase[1].split(' ').map(Number)[i]);
  const checkQueue = new Array(N).fill().map((_, i) => i);
  const check = checkQueue[M];
  const checkAnswer = [];

  while (queue.length) {
    const importance = Math.max(...queue);
    const shiftItem = queue.shift();
    const shiftCheck = checkQueue.shift();
    if (shiftItem === importance) {
      checkAnswer.push(shiftCheck);
    } else {
      queue.push(shiftItem);
      checkQueue.push(shiftCheck);
    }
  }
  console.log(checkAnswer.indexOf(check) + 1);
}
