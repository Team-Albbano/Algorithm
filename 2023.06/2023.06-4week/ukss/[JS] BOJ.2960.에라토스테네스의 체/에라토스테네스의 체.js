const [N, K] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const arr = Array(N + 1)
    .fill(true)
    .fill(false, 0, 2);
let cnt = 1;

for (let i = 2; i <= N; i++) {
    let j = 2;

    if (arr[i]) {
        arr[i] = false;

        if (cnt === K) {
            console.log(`${i}`);
        }
        cnt++;
    }

    while (i * j <= N) {
        if (arr[i * j]) {
            arr[i * j] = false;

            if (cnt === K) {
                console.log(`${i * j}`);
            }
            cnt++;
        }
        j++;
    }
}
