const [, list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = list.split(' ').map(Number);
const ans = [];

for (let i = 1; i <= Math.max(...num); i++) {
    let check = 0;
    num.forEach((n) => {
        if (n % i === 0) {
            check++;
        }
    });

    if (check === num.length) {
        ans.push(i);
    }
}

console.log(ans.join('\n'));
