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
  const [nm, ...lines] = input;
  const [n, _] = nm.split(' ').map(Number);
  const list = Array.from(Array(n + 1), _ => []);
  const check = Array.from(Array(n + 1), _ => false);
  lines.forEach(line => {
    const [from, to] = line.split(' ').map(Number);
    list[from].push(to);
    list[to].push(from);
  })
  let ans = 0;
  for (let i = 1; i <= n; ++i) {
    if (!check[i]) {
      bfs(i, list, check);
      ++ans;
    }
  }
  console.log(ans);
}

function bfs(start, list, check) {
  const queue = new LinkedList();
  queue.offer(start);
  check[start] = true;
  while (!queue.isEmpty()) {
    const now = queue.poll();
    list[now].forEach(next => {
      if (!check[next]) {
        check[next] = true;
        queue.offer(next);
      }
    });
  }
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
    const polledValue = this.tail.value;
    this.head = this.head.next;
    if (!this.head)
      this.tail = null;
    --this.size;
    return polledValue;
  }
  isEmpty() {
    return this.size === 0;
  }
}
