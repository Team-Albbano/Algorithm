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
  constructor(value) {
    this.value = value;
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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.size;
  }
  poll() {
    const retNode = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.head = null;
      this.tail = null;
    }
    --this.size;
    return retNode;
  }
  isEmpty() {
    return this.size === 0;
  }
}

function solution() {
  const [n, k] = input[0].split(' ').map(Number);
  const queue = new LinkedList();
  for (let i = 1; i <= n; ++i) {
    queue.offer(i);
  }
  let cnt = k;
  const ans = [];
  while (!queue.isEmpty()) {
    const node = queue.poll();
    if (--cnt === 0) {
      ans.push(node); 
      cnt = k;
      continue;
    }
    queue.offer(node);
  }
  console.log('<' + ans.join(', ') + '>');
}