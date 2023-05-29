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
}

function solution() {
  const [n, ...arr] = input.map(Number);
  const stack = new Stack();
  arr.forEach(item => {
    if (item === 0)
      stack.pop();
    else
      stack.push(item);
  })
  const result = stack._stack.reduce((cal, cur) => cal + cur, 0);
  console.log(result);
}