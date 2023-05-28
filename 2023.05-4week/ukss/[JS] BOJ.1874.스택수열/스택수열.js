const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const [n, ...sequence] = input;

function solution(num, list) {
  const stack = [];
  let command = [];
  let cnt = 1;

  for (let i = 0; i < list.length; i++) {
    while (cnt <= sequence[i]) {
      stack.push(cnt);
      command.push('+');
      cnt++;
    }

    const popItem = stack.pop();
    command.push('-');

    if (popItem !== list[i]) {
      command = ['NO'];
      break;
    }
  }
  return command.join('\n');
}

const answer = solution(n, sequence);
console.log(answer);
