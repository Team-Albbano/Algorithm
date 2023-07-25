const input = +require('fs').readFileSync('/dev/stdin').toString().trim();
let str = '';
function star(i, j) {
    if (i % 3 === 1 && j % 3 === 1) {
        str += ' ';
    } else {
        if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
            str += '*';
        } else {
            star(Math.floor(i / 3), Math.floor(j / 3));
        }
    }
}
for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        star(i, j);
    }
    str += '\n';
}
console.log(str);
