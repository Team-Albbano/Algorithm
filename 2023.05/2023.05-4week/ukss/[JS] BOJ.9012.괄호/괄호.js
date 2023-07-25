const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...parenthesis] = input;

function solution(n, parenthesis) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    const part = parenthesis[i].split('');
    let stack = 0;
    let vpsCheck = true;

    for (let j = 0; j < part.length; j++) {
      switch (part[j]) {
        case '(':
          stack += 1;
          break;

        case ')':
          if (stack === 0) {
            vpsCheck = false;
          } else {
            stack -= 1;
          }
          break;

        default:
          break;
      }
    }

    if (stack === 0 && vpsCheck) {
      answer += 'YES';
    } else {
      answer += 'NO';
    }

    answer += ' ';
  }

  return answer.split(' ').join('\n');
}

const answer = solution(n, parenthesis);
console.log(answer);
