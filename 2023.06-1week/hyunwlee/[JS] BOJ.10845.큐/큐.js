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

class Node {
  constructor(item) {
    this.value = item;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  offer(item) {
    const newNode = new Node(item);
    ++this.size;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return ;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  poll() {
    const retNode = this.head.value;
    this.head = this.head.next;
    --this.size;
    if (!this.head) {
      this.tail = null;
    }
    return retNode;
  }
  isEmpty() {
    return this.size === 0;
  }
  front() {
    return this.head.value;
  }
  back() {
    return this.tail.value;
  }
}

function solution() {
  const [n, ...arr] = input;
  const queue = new LinkedList();
  let ans = '';
  arr.forEach(item => {
    const [command, num] = item.split(' ');
    if (command === 'push') {
      queue.offer(num);
    }
    else if (command === 'pop') {
      if (queue.isEmpty())
        ans += '-1\n';
      else
        ans += queue.poll() + '\n';
    }
    else if (command === 'front') {
      if (queue.isEmpty())
        ans += '-1\n'
      else
        ans += queue.front() + '\n';
    }
    else if (command === 'back') {
      if (queue.isEmpty())
        ans += '-1\n'
      else
        ans += queue.back() + '\n';
    }
    else if (command === 'size') {
      ans += queue.size + '\n';
    }
    else if (command === 'empty') {
      if (queue.isEmpty())
        ans += '1\n'
      else
        ans += '0\n';
    }
  })
  console.log(ans);
}