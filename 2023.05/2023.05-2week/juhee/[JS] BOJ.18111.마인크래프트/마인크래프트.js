const [N, M, B, ...land] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

let minTime = Number.MAX_VALUE;
let maxHeight = 0;
const heights = Array(257).fill(0);
land.forEach((v) => heights[v]++);

for (let target = 256; target >= 0; target--) {
  let blockInventory = B;
  let time = 0;
  // 변수 초기화
  heights.forEach((count, height) => {
    blockInventory += (height - target) * count;
    if (target > height) {
      time += (target - height) * count;
    } else {
      time += (height - target) * 2 * count;
    }
  });
  if (time > minTime) break;
  if (blockInventory < 0) continue;
  if (time < minTime) {
    minTime = time;
    maxHeight = target;
  }
}
console.log(minTime, maxHeight);
