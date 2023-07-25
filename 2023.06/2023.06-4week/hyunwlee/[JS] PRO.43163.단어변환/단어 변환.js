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


let ans = Number.MAX_VALUE;
function solution(begin, target, words) {
  const check = Array.from({length: words.length}, _ => false);
  if (words.indexOf(target) === -1 || begin === target) {
    return 0;
  }
  dfs(0, begin, target, words, check);
  if (ans === Number.MAX_VALUE)
    return 0;
  return ans;
}

function dfs(depth, curr, target, words, check) {
  if (depth >= words.length) {
    return ;
  }
  if (curr === target) {
    ans = Math.min(ans, depth);
    return depth;
  }
  words.forEach((word, index) => {
    if (!check[index]) {
      if (diffWords(curr, word)) {
        check[index] = true;
        dfs(depth + 1, word, target, words, check);
        check[index] = false;
      }
    }
  });
}

function diffWords(a, b) {
  let cnt = 0;
  let i = -1;
  while (++i < a.length) {
    if (a[i] === b[i])
      ++cnt;
  }
  return (cnt === a.length - 1);
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "hit", ["hot", "dot", "dog", "lot", "log"]));
