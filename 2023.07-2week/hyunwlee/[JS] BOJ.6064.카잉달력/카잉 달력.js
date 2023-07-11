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

function solution() {
  let [_, ...arr] = input;
  let s = '';
  arr = arr.map(line => line.split(' ').map(Number));
  arr.forEach(([m, n, x, y]) => {
    const destroy = lcm(m, n);
    while (true) {
      if (x > destroy || y > destroy) {
        s += (-1 + '\n');
        break;
      }
      else if (x > y)
        y += n;
      else if (x < y)
        x += m;
      else {
        s += (x + '\n');
        break;
      }
    }
  });
  console.log(s);
}

function gcd(a, b) {
  if (b === 0)
    return a;
  if (a < b)
    return gcd(a, b % a);
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
