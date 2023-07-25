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

const arr = [(num) => (2 * num), (num) => (num - 1), (num) => (num + 1)];

function solution() {
  const [n, k] = input[0].split(' ').map(Number);
  const dist = bfs(n, k);
  console.log(dist[k]);
}

function bfs(start, end) {
  const queue = new LinkedList();
  queue.offer(start);
  const dist = Array.from({length: 100001}, _ => -1);
  dist[start] = 0;

  while(!queue.isEmpty()) {
    const now = queue.poll();
    for (let i = 0; i < 3; ++i) {
      const next = arr[i](now);
      if (next < 0 || next > 100000)
        continue;
      if (dist[next] !== -1)
        continue;
      dist[next] = dist[now] + 1;
      if (next === end) {
        return dist;
      }
      queue.offer(next);
    }
  }
  return (dist);
}

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
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
    return (retValue);
  }
  isEmpty() {
    return (this.size === 0);
  }
}
