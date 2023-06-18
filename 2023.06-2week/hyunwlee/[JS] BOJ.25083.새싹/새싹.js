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
  let ans = '';
  ans += '         ,r\'"7\n';
  ans += 'r\`-_   ,\'  ,/\n';
  ans += ' \\. ". L_r\'\n';
  ans += '   `~\\/\n';
  ans += '      |\n';
  ans += '      |';
  console.log(ans);
}
