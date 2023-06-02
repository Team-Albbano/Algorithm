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
  let [n, ...arr] = input;
  let ans = '';
  arr = arr.map(line => line.split(' ').map(Number))
           .sort((a, b) => {
            if (a[1] === b[1])
              return a[0] - b[0];
            return a[1] - b[1];
           });
  arr.forEach(item => {
    ans += item.join(' ') + '\n';
  })
  console.log(ans);
}