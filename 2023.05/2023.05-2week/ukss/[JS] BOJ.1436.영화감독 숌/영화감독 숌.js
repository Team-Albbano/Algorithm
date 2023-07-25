let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let titleNum = 665;

while (input > 0) {
  titleNum++;
  if (titleNum.toString().includes('666')) {
    input--;
  }
}

console.log(titleNum);
