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
class Stack {
  constructor() {
    this._stack = [];
  }
  push(item) {
    this._stack.push(item);
  }
  pop() {
    return (this._stack.pop());
  }
  isEmpty() {
    return (this._stack.length === 0);
  }
  peek() {
    return this._stack[this._stack.length - 1];
  }
}

function solution() {
  const arr = input.splice(0, input.length - 1);
  let ans = '';
  arr.forEach(line => {
    const stack = new Stack();
    const charArr = line.split('');
    charArr.forEach(c => {
      if (c === '(' || c === '[' || c === ')' || c === ']')
        stack.push(c);
      while (!stack.isEmpty() && (stack.peek() === ')' || stack.peek() === ']')) {
        const symb = stack.pop();
        if (stack.isEmpty()) {
          stack.push(symb);
          break;
        }
        if (symb === ')') {
          if (stack.peek() === '(') {
            stack.pop();
            continue;
          }
          else {
            stack.push(symb);
            break;
          }
        }
        else if (symb === ']') { 
          if (stack.peek() === '[') {
            stack.pop();
            continue;
          }
          else {
            stack.push(symb);
            break;
          }
        }
      }
    })
    if (stack.isEmpty())
      ans += 'yes\n';
    else
      ans += 'no\n';
  })
  console.log(ans);
}