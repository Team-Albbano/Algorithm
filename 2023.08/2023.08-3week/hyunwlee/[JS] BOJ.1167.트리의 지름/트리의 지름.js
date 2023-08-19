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
  const [n, ...lines] = input;
  const lists = Array.from(Array(Number(n) + 1), _ => []);
  lines.forEach(line => {
    const [from, ...arr] = line.split(' ').map(Number);
    let i = 0;
    while (i < arr.length - 1) {
      const to = arr[i++];
      const weight = arr[i++];
      lists[from].push({to, weight});
    }
  })
  let max = {to: 0, weight: Number.MIN_SAFE_INTEGER};
  let check = Array.from({length: Number(n) + 1}, _ => false);
  dfs(1, 0, lists, check, max);
  check = Array.from({length: Number(n) + 1}, _ => false);
  dfs(max.to, 0, lists, check, max);
  console.log(max.weight);
}

function dfs(x, val, lists, check, max) {
  if (check[x])
    return ;
  check[x] = true;
  if (val > max.weight) {
    max.to = x;
    max.weight = val;
  }
  for (let {to, weight} of lists[x])
    dfs(to, val + weight, lists, check, max);
}
