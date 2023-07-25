const [NC, ...coordinate] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, C] = NC.split(' ').map(Number);
const xList = coordinate.map(Number).sort((a, b) => a - b);

let low = 1;
let high = xList[xList.length - 1];

while (low <= high) {
    let mid = ~~((low + high) / 2);

    if (routerSet(mid)) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

function routerSet(distance) {
    let cnt = C - 1;
    let prevSet = xList[0];

    for (let i = 1; i < xList.length; i++) {
        if (xList[i] - prevSet >= distance) {
            prevSet = xList[i];
            cnt--;
        }
    }

    if (cnt <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(high);
