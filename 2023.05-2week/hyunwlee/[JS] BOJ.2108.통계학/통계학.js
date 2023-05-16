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
  const n = +input[0];
  const arr = input.map(Number).filter((_, idx) => (idx !== 0));
  const sortedArr = arr.sort((a, b) => (a - b));
  const sum = Math.round(arr.reduce((cal, cur) => (cal += cur), 0) / n);
  console.log(sum === -0 ? 0 : sum);

  console.log(sortedArr[Math.floor(n / 2)])
  console.log(choibin(arr));
  console.log(Math.abs(sortedArr[n - 1] - sortedArr[0]));
}

function choibin(arr) {
  const map = new Map();
  arr.forEach(item => {
    if (map.has(item)) {
      const updatedVal = map.get(item) + 1;
      map.set(item, updatedVal);
    }
    else 
      map.set(item, 1);
  });
  const max = Array.from(map.values()).reduce((cal, cur) => (Math.max(cal, cur)), Number.MIN_VALUE);
  const sortedMapByValue = Array.from(map.entries())
  .sort((a, b) => {
    if (a[1] < b[1])
      return 1;
    if (a[1] > b[1])
      return -1;
    return a[0] - b[0];
  })
  .filter((item) => (item[1] === max));
  if (sortedMapByValue.length > 1)
    return sortedMapByValue[1][0];
  return sortedMapByValue[0][0];
}