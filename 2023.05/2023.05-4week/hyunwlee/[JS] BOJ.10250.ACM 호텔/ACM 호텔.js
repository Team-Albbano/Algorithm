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
  let ans = [];
  arr.forEach(line => {
    const [H, W, N] = line.split(' ').map(Number);
    let cnt = 0;
    let flag = false;
    for (let j = 0; j < W; ++j) {
      if (flag) break;
      flag = false;
      for (let i = 0; i < H; ++i) {
        ++cnt;
        if (cnt === N) {
          flag = true;
          let str = ++i + '' + ((++j > 9) ? j : '0' + j);
          ans.push(str);
          break;
        }
      }
    }
  })
  console.log(ans.join('\n'));
}