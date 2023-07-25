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
  const n = Number(input[0]);
  const m = Number(input[1]);
  const s = input[2];
  let pattern = 'I';
  for (let i = 0; i < n; ++i)
    pattern += 'OI';
  console.log(KMP(s, pattern));
}

function makeTable(pattern) {
  const table = Array.from({length: pattern.length}, _ => 0);
  let j = 0;
  for (let i = 1; i < pattern.length; ++i) {
    while (j > 0 && pattern[i] !== pattern[j])
      j = table[j - 1];
    if (pattern[i] === pattern[j])
      table[i] = ++j;
  }
  return table;
}


function KMP(s, pattern) {
  const table = makeTable(pattern);
  let j = 0;
  let ans = 0;
  for (let i = 0; i < s.length; ++i) {
    while (j > 0 && s[i] !== pattern[j])
      j = table[j - 1];
    if (s[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        ++ans;
        j = table[j];
      }
      else
        ++j;
    }
  }
  return (ans);
}
