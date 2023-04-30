const list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = list.shift();
let area = 0;
let arr = Array.from(Array(100), () => Array(100).fill(false));

for (let i = 0; i < cnt; i++) {
  let [x, y] = list[i].split(' ').map(Number);

  for (let j = x - 1; j < x + 9; j++) {
    for (let k = y - 1; k < y + 9; k++) {
      arr[j][k] = true;
    }
  }
}

let testCnt = 0;

for (let i = 0; i < arr.length; i++) {
  let test = arr[i].filter((el) => el === true);
  testCnt += test.length;
}

console.log(testCnt);