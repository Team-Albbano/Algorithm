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

class Stack {
  constructor() {
    this._stack = [];
  }
  push(item) {
    this._stack.push(item);
  }
  pop() {
    return this._stack.pop();
  }
  isEmpty() {
    return (this._stack.length === 0);
  }
  peek() {
    return (this._stack[this._stack.length - 1]);
  }
}
function solution() {
  const [n, ...arr]  = input;
  let ans = '';
  arr.forEach(line => {
    const stack = new Stack();
    line.split('').forEach(char => {
      stack.push(char);
      while (!stack.isEmpty()) {
        const val = stack.pop();
        if (stack.isEmpty()) {
          stack.push(val);
          break;
        }
        if (val === ')' && stack.peek() === '(') {
          stack.pop();
        }
        else {
          stack.push(val);
          break;
        }
      }
    });
    if (stack.isEmpty())
      ans += 'YES\n';
    else
      ans += 'NO\n';
  })
  console.log(ans);
}