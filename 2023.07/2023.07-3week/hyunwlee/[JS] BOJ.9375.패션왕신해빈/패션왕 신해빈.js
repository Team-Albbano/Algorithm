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
  const [t, ...arr] = input;
  let i = -1;
  let j = 0;
  let ans = '';
  while (++i < arr.length) {
    const map = new Map();
    const num = Number(arr[i]);
    j = i + 1;
    for (; j <= i + num; ++j) {
      const [clothing, type] = arr[j].split(' ');
      if (map.has(type)) {
        const value = map.get(type);
        map.set(type, value + 1);
      }
      else {
        map.set(type, 1);
      }
    }
    i += num;
    let sum = 1;
    for (const [key, value] of map.entries()) {
      sum *= (value + 1);
    }
    ans += (sum - 1) + '\n';
  }
  console.log(ans);
}
