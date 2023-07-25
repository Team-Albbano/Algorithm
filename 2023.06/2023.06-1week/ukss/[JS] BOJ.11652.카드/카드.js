const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((v) => BigInt(v));
const [, ...cards] = input;
cards.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
function solution(lists) {
    let cnt = 0;
    let maxCnt = 0;
    let maxNum = lists[0];
    lists.forEach((card, i) => {
        next = lists[i + 1];
        if (card === next) {
            cnt++;
        } else {
            cnt = 0;
        }
        if (cnt > maxCnt) {
            maxCnt = cnt;
            maxNum = card;
        }
    });
    return String(maxNum);
}
const answer = solution(cards);
console.log(answer);
