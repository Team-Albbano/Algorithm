const [first, ...list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = first.split(' ').map(Number);

const numToKey = new Map();
const nameToKey = new Map();

for (let i = 0; i < N; i++) {
    numToKey.set(i + 1, list[i]);
    nameToKey.set(list[i], i + 1);
}

const question = list.splice(list.length - M, M).map((el) => {
    if (!isNaN(el)) {
        return numToKey.get(+el);
    } else {
        return nameToKey.get(el);
    }
});

console.log(question.join('\n'));
