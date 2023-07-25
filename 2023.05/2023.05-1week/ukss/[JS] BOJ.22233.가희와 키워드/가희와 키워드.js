const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = n.split(' ').map(Number);
let keyword = [];
for (let i = 0; i < N; i++) {
  keyword.push(arr[i]);
}
for (let i = N; i < N + M; i++) {
  let memo = arr[i].split(',');
  for (let j = 0; j < memo.length; j++) {
    keyword = keyword.filter((el) => el !== memo[j]);
  }
  console.log(keyword.length);
}
