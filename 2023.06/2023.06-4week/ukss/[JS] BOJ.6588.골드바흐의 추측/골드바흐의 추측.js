const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .slice(0, -1)
    .map(Number);

const max = Math.max(...input);
const ans = [];

const arr = Array(max + 1)
    .fill(true)
    .fill(false, 0, 2);

for (let i = 2; i * i <= max; i++) {
    if (arr[i]) {
        let j = 2;

        while (i * j <= max) {
            arr[i * j] = false;
            j++;
        }
    }
}

input.map((num) => {
    for (let i = 3; i <= num; i += 2) {
        if (arr[i] && arr[num - i]) {
            ans.push(`${num} = ${i} + ${num - i}`);
            break;
        }
    }
});

console.log(ans.join('\n'));
