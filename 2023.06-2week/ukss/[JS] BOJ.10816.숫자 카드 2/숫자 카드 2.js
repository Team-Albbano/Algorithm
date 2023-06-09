const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, card, M, check] = input.map((v) => v.split(' ').map(Number));

card.sort((a, b) => a - b);
let cardCnt = [[card[0], 1]];

for (let i = 1; i < card.length; i++) {
    if (card[i - 1] === card[i]) {
        cardCnt[cardCnt.length - 1][1]++;
    } else {
        cardCnt.push([card[i], 1]);
    }
}

const ans = [];

check.forEach((item) => {
    let left = 0;
    let right = cardCnt.length - 1;
    let mid = Math.floor((left + right) / 2);
    let status = false;

    while (left <= right) {
        if (item === cardCnt[mid][0]) {
            ans.push(cardCnt[mid][1]);
            status = true;
            break;
        } else if (item > cardCnt[mid][0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((left + right) / 2);
    }

    !status && ans.push(0);
});

console.log(...ans);
