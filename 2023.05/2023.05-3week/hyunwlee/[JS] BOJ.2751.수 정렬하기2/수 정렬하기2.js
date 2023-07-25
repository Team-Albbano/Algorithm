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

// @ts-check

function solution() {
  const n = +input[0];
  const arr = input.splice(1).map(Number);
  mergeSort('0', arr.length - 1, arr);
  console.log(arr.join('\n'));
}

/**
 * 
 * @param {number} start 
 * @param {number} end 
 * @param {Array.<number>} arr 
 * @returns void
 */
function mergeSort(start, end, arr) {
  if (start >= end)
    return ;
  let mid = Math.floor((start + end) / 2);
  mergeSort(start, mid, arr);
  mergeSort(mid + 1, end, arr);
  // merge(start, end, mid, arr);
}

/**
 * 
 * @param {number} start 
 * @param {number} end 
 * @param {number} mid 
 * @param {Array.<number>} arr 
 * @returns void
 */
function merge(start, end, mid, arr) {
  const temp = Array.from({length: end - start + 1}, _ => 0);
  let idx = 0;
  let ltIdx = start;
  let rtIdx = mid + 1;
  while (ltIdx <= mid && rtIdx <= end) {
    if (arr[ltIdx] <= arr[rtIdx])
      temp[idx++] = arr[ltIdx++];
    else
      temp[idx++] = arr[rtIdx++];
  }
  while (ltIdx <= mid) {
    temp[idx++] = arr[ltIdx++];
  }
  while (rtIdx <= end) {
    temp[idx++] = arr[rtIdx++];
  }
  for (let i = start; i <= end; ++i) {
    arr[i] = temp[i - start];
  }
}
