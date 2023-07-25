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
  const [N, M] = input[0].split(" ").map((item) => +item);
  const board = Array(N).fill(Array(M).fill(null));
  for (let i = 1; i < input.length; ++i) board[i - 1] = input[i].split("");
  const sum = [];
  let arr = Array(N).fill(Array(M).fill(1));
  arr = arr.map((item, i) =>
    item.map((val, j) => {
      if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0))
        return "B";
      return "W";
    })
  );
  for (let startingX = 0; startingX <= N - 8; ++startingX) {
    for (let startingY = 0; startingY <= M - 8; ++startingY) {
      let cases = [0, 0];
      for (let i = startingX; i < startingX + 8; ++i) {
        for (let j = startingY; j < startingY + 8; ++j) {
          if (board[i][j] === arr[i][j]) ++cases[0];
          else ++cases[1];
        }
      }
      sum.push(cases[0]);
      sum.push(cases[1]);
    }
  }
  console.log(sum.reduce((sum, item) => Math.min(sum, item), 64));
}
