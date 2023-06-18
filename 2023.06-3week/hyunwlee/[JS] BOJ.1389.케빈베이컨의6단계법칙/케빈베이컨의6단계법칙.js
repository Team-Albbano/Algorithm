const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  solution();
  process.exit();
});

function solution() {
  const [nm, ...arr] = input;
  const [n, m] = nm.split(' ').map(Number);
  const list = Array.from(Array(n + 1), _ => []);
  arr.forEach(line => {
    const [from, to] = line.split(' ').map(Number);
    list[from].push(to);
    list[to].push(from);
  });
  for (let i = 1; i <= n; ++i)
    list[i].sort((a, b) => (a - b));
  let min = Number.MAX_VALUE;
  let ans = n;
  for (let i = 1; i <= n; ++i) {
    const dist = bfs(i, list, n);
    const sum = dist.reduce((cal, cur) => (cal + cur), 0) + 1;
    if (min > sum) {
      min = sum;
      ans = i;
    }
  }
  console.log(ans);
}

function bfs(start, list, n) {
  const queue = new LinkedList();
  const dist = Array.from({length: n + 1}, _ => -1);
  queue.offer(start);
  dist[start] = 0;
  while (!queue.isEmpty()) {
    const now = queue.poll();
    list[now].forEach(next => {
      if (dist[next] === -1) {
        dist[next] = dist[now] + 1;
        queue.offer(next);
      }
    });
  }
  return dist;
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
