const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // solution();
  process.exit();
});

function solution(files) {
  files = files.map(item => {
    let head = '';
    let number = '';
    let tail = '';
    let i = -1;
    while (++i < item.length) {
      if ('0' <= item[i] && item[i] <= '9')
        break;
      head += item[i];
    }
    --i;
    while (++i < item.length) {
      if ('0' > item[i] || item[i] > '9')
        break;
      number += item[i];
    }
    --i;
    while (++i < item.length) {
      if (item[i] === '.')
        continue;
      tail += item[i];
    }
    return {head: head.toLowerCase(), number: Number(number), tail, pure: item};
  });
  const sortedFiles = files.sort((a, b) => {
    if (a.head === b.head) {
      if (a.number === b.number) {
        return 0;
      }
      else {
        return (a.number - b.number);
      }
    }
    else
      return a.head < b.head ? -1 : a.head > b.head ? 1 : 0;
  });
  const answer = sortedFiles.map(item => item.pure);
  return answer;
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));
