const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const n = +input[0];
  let ans = 666;
  let cnt = 1;

  while (cnt !== n) {
    ++ans;
    if (String(ans).includes("666")) ++cnt;
  }
  console.log(ans);
}
//  1   666
//  2  1666
//  3  2666
//  4  3666
//  5  4666
//  6  5666
//  7  6660
//  8  6661
//  9  6662
// 10  6663
// 11  6663
// 12  6664
// 13  6665
// 14  6666
// 15  6667
// 16  6668
// 17  6669
// 18  10666
// 19  11666
