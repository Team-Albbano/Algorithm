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
  const [info, ...arr] = input;
  const houseArr = arr.map(Number).sort((a, b) => (a - b));
  const [n, c] = info.split(' ').map(Number);
  console.log(parametricSearch(0, 1000000000, houseArr, c, -1));
}

function parametricSearch(start, end, houseArr, target, result) {
  if (start > end) {
    return result;
  }
  const mid = Math.floor((start + end) / 2);
  const numPickedHouses = countPickedHouses(mid, houseArr);
  if (numPickedHouses < target) {
    return parametricSearch(start, mid - 1, houseArr, target, result);
  }
  else {
    result = mid;
    return parametricSearch(mid + 1, end, houseArr, target, result);
  }
}

function countPickedHouses(targetAble, houseArr) {
  let cnt = 1; // default
  let pickedHouse = houseArr[0];
  for (let i = 1; i < houseArr.length; ++i) {
    if (houseArr[i] - pickedHouse >= targetAble) {
      pickedHouse = houseArr[i];
      ++cnt;
    }
  }
  return cnt;
}
