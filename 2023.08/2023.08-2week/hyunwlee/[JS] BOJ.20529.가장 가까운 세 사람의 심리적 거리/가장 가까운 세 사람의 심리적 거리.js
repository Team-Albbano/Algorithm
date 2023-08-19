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

let min = Number.MAX_SAFE_INTEGER;
function solution() {
  const [t, ...arr] = input;
  let ans = '';
  for (let i = 0; i < t; ++i) {
    const mbtis = Array.from(arr[i * 2 + 1].split(' '));
    // 비둘기집 원리 (불필요한 계산을 줄인다)
    if (mbtis.length > 32) {
      ans += 0 + '\n';
      continue;
    }
    min = Number.MAX_SAFE_INTEGER;
    recurse(0, '', Array.from({length: mbtis.length}, () => false), mbtis);
    ans += min + '\n';
  }
  console.log(ans);
}

function countDistanceMbtis(a, b) {
  let distance = 0;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i])
      ++distance;
  }
  return distance;
}

function recurse(depth, str, check, mbtis) {
  if (depth >= 3) {
    const idxs = str.split(',').map(Number);
    const first = countDistanceMbtis(mbtis[idxs[0]], mbtis[idxs[1]]);
    const second = countDistanceMbtis(mbtis[idxs[0]], mbtis[idxs[2]]);
    const third = countDistanceMbtis(mbtis[idxs[1]], mbtis[idxs[2]]);
    min = Math.min(min, (first + second + third));
    return;  
  }
  for (let i = 0; i < mbtis.length; ++i) {
    if (check[i])
      continue;
    check[i] = true;
    recurse(depth + 1, str === '' ? i : str + ',' + i ,check, mbtis)
    check[i] = false;
  }
}
