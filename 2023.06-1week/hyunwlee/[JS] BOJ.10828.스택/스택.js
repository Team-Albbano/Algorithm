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
  peek() {
    return this._stack[this._stack.length - 1];
  }
  isEmpty() {
    return this._stack.length === 0;
  }
}

function solution() {
  const [n, ...arr] = input;
  const stack = new Stack();
  let ans = '';
  arr.forEach(item => {
    const [command, num] = item.split(' ');
    if (command === 'push') {
      stack.push(num);
    }
    else if (command === 'pop') {
      if (stack.isEmpty())
        ans += '-1\n';
      else
        ans += stack.pop() + '\n';
    }
    else if (command === 'top') {
      if (stack.isEmpty())
        ans += '-1\n'
      else
        ans += stack.peek() + '\n';
    }
    else if (command === 'size') {
      ans += stack._stack.length + '\n';
    }
    else if (command === 'empty') {
      if (stack.isEmpty())
        ans += '1\n'
      else
        ans += '0\n';
    }
  })
  console.log(ans);
}