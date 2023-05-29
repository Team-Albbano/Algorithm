const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...commands] = input;

function solution(n, commands) {
  let answer = '';
  const stack = [];

  for (let i = 0; i < n; i++) {
    const command = commands[i].split(' ')[0];

    switch (command) {
      case 'push':
        const pushItem = commands[i].split(' ')[1];
        stack.push(pushItem);
        break;

      case 'pop':
        answer += stack.length ? stack.pop() : -1;
        answer += ' ';
        break;

      case 'size':
        answer += stack.length;
        answer += ' ';
        break;

      case 'empty':
        answer += stack.length ? 0 : 1;
        answer += ' ';
        break;

      case 'top':
        answer += stack.length ? stack[stack.length - 1] : -1;
        answer += ' ';
        break;

      default:
        break;
    }
  }

  return answer.split(' ').join('\n');
}

const answer = solution(n, commands);
console.log(answer);
