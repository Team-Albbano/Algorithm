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
  const charArr = input[1].split('');
  let sum = 0;
  let r = 1;
  charArr.forEach(c => {
    const ch = (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
    const ans = ch * r % 1234567891;
    sum += ans % 1234567891;
    r *= 31;
    r %= 1234567891;
  })
  console.log(sum % 1234567891);
}