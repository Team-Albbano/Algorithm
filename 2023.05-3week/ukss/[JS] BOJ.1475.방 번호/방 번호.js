const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

let plastic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp = [...plastic];
let left = [];
let cnt = 1;

for (let i = 0; i < input.length; i++) {
  if (plastic.indexOf(input[i]) === -1) {
    if (left.includes(input[i])) {
      if (input[i] === 6 && left.indexOf(9) !== -1) {
        left.splice(plastic.indexOf(9), 1);
      } else if (input[i] === 9 && left.indexOf(6) !== -1) {
        left.splice(plastic.indexOf(6), 1);
      } else {
        left.splice(left.indexOf(input[i]), 1);
      }
    } else {
      if (input[i] === 6 && plastic.indexOf(9) !== -1) {
        plastic.splice(plastic.indexOf(9), 1);
      } else if (input[i] === 9 && plastic.indexOf(6) !== -1) {
        plastic.splice(plastic.indexOf(6), 1);
      } else {
        plastic.forEach((el) => left.push(el));
        plastic = [...temp];
        plastic.splice(plastic.indexOf(input[i]), 1);
        cnt++;
      }
    }
  } else {
    plastic.splice(plastic.indexOf(input[i]), 1);
  }
}

console.log(cnt);
