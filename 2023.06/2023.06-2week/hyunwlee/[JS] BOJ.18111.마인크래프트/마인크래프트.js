const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
  process.exit();
});

function solution() {
  const [n, m, blocks] = input.shift().split(' ').map(Number);
  const arr = input.map(item => item.split(' ').map(val => Number(val)));
  console.log(arr);
  const ans = [];
  for (let i = 0; i <= 256; ++i)
    ans.push(bruteForce(i, arr, n, m, blocks));
  ans.sort((a, b) => {
    if (a[0] === b[0])
        return (b[1] - a[1]);
    else
        return (a[0] - b[0]);
  });
  console.log(ans[0].join(' '));
}

function bruteForce(target, arr, n, m, blocks) {
  let blockNum = blocks;
  let remove = 0;
  let add = 0;
  let time = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (arr[i][j] > target) {
        remove += arr[i][j] - target;
        blockNum += arr[i][j] - target;
      }
      else if (arr[i][j] < target) {
        add += target - arr[i][j];
        blockNum -= target - arr[i][j];
      }
      time = 2 * remove + add;
    }
  }
  if (blockNum < 0)
    return [Number.MAX_SAFE_INTEGER, target];
  else 
    return [time, target];
}
