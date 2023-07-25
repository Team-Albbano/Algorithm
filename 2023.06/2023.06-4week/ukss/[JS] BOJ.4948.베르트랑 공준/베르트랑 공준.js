const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

for (let item of input) {
    if (!item) {
        break;
    } else {
        let max = item * 2;
        let arr = Array(max + 1)
            .fill(true)
            .fill(false, 0, 2);
        let res = [];

        for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
            let j = 2;
            while (i * j <= max) {
                arr[i * j] = false;
                j++;
            }
        }

        for (let i = item + 1; i <= max; i++) {
            if (arr[i]) {
                res.push(i);
            }
        }

        console.log(res.length);
    }
}
