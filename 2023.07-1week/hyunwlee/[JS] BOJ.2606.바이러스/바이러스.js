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
  const [n, _, ...arr] = input;
  const list = Array.from(Array(Number(n) + 1), _ => []);
  arr.forEach(line => {
    const [from, to] = line.split(' ').map(Number);
    list[from].push(to);
    list[to].push(from);
  });
  console.log(bfs(n, list));
}

function bfs(n, list) {
  const queue = new LinkedList();
  const check = Array.from({length: n + 1}, _ => false);
  let ans = 0;
  queue.offer(1);
  check[1] = true;
  while (!queue.isEmpty()) {
    const node = queue.poll();
    list[node].forEach(next => {
      if (!check[next]) {
        check[next] = true;
        queue.offer(next);
        ++ans;
      }
    });
  }
  return ans;
}

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
  offer(value) {
    const newNode = new Node(value);
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
    const retValue = this.head.value;
    this.head = this.head.next;
    if (!this.head)
      this.tail = null;
    --this.size;
    return retValue;
  }
  isEmpty() {
    return this.size === 0;
  }
}
