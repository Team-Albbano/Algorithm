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
  let [n, ...arr] = input;
  arr = arr.map(Number).sort((a, b) => (a - b));
  // mergeSort(0, n - 1, arr);
  console.log(arr.join('\n'));
}

function mergeSort(start, end, arr) {
  if (start >= end) return ;
  let mid = Math.floor((start + end) / 2);
  mergeSort(start, mid, arr);
  mergeSort(mid + 1, end, arr);
  merge(start, end, mid, arr);
}

function merge(start, end, mid, arr) {
  const temp = Array.from({length: end - start + 1}, _ => 0);
  let idx = 0;
  let lt = start;
  let rt = mid + 1;
  while (lt <= mid && rt <= end) {
    if (arr[lt] <= arr[rt])
      temp[idx++] = arr[lt++];
    else
      temp[idx++] = arr[rt++];
  }
  while (lt <= mid) {
    temp[idx++] = arr[lt++];
  }
  while (rt <= end) {
    temp[idx++] = arr[rt++];
  }
  for (let i = start; i <= end; ++i) {
    arr[i] = temp[i - start];
  }
}