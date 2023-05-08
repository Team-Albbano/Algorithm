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
  const result = input
    .map((item) => {
      if (item === "0") {
        return;
      } else return checkIsPalindrome(item);
    })
    .filter((item) => item !== undefined);

  result.forEach((item) => {
    if (item) console.log("yes");
    else console.log("no");
  });
}

function checkIsPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    ++i;
    --j;
  }
  return true;
}
