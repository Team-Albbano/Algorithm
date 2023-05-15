const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution();
    process.exit();
});

// @ts-check

/**
 * 
 */
function solution() {
    const n = +input[0];
    let ans = 0;
    for (let i = 1; i <= n; ++i) {
        const result = String(i).split('').reduce((cal, cur) => (cal + +cur), i);
        if (result === n) {
            console.log(i);
            return ;
        }
    }
    console.log(0);
}