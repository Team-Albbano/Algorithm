const [K, ...money] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let arr = [];
money.forEach((el) => {
    if (el === 0) {
        arr.pop();
    } else {
        arr.push(el);
    }
});
console.log(arr.reduce((acc, cur) => (acc += cur), 0));
