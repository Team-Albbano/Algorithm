const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const size = input
  .slice(1, input.length)
  .toString()
  .split(',')
  .map((el) => el.split(' ').map(Number));
const rank = [];
for (let i = 0; i < N; i++) {
  let cnt = 1;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (size[i][0] < size[j][0] && size[i][1] < size[j][1]) {
        cnt++;
      }
    }
  }
  rank.push(cnt);
}
console.log(rank.join(' '));
