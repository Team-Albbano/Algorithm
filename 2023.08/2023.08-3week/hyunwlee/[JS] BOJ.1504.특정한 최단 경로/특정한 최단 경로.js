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
  const [n, m] = nm.split(' ').map(Number);
  const lists = Array.from(Array(n + 1), _ => []);
  lines.splice(0, m).forEach(line => {
    const [from, to, weight] = line.split(' ').map(Number);
    lists[from].push({to, weight});
    lists[to].push({to: from, weight});
  })
  const [v1, v2] = lines[0].split(' ').map(Number);
  const distS =  dijkstra(1, n, lists);
  const distV1 = dijkstra(v1, n, lists);
  const distV2 = dijkstra(v2, n, lists);
  const first = distS[v1] + distV1[v2] + distV2[n];
  const second = distS[v2] + distV2[v1] + distV1[n];
  if (first === Infinity && second === Infinity) {
    console.log(-1);
    return ;
  }
  console.log(Math.min(first, second));
}

function dijkstra(x, n, lists) {
  const pq = new PriorityQueue((a, b) => (a.weight < b.weight));
  const check = Array(n + 1).fill(false);
  const dist = Array(n + 1).fill(Infinity);
  pq.offer({to: x, weight: 0});
  dist[x] = 0;
  while (!pq.isEmpty()) {
    const {to} = pq.poll();
    if (check[to])
      continue;
    check[to] = true;
    for(const {to: nextTo, weight: nextWeight} of lists[to]) {
      if (check[nextTo])
        continue;
      if (dist[nextTo] <= dist[to] + nextWeight) 
        continue;
      dist[nextTo] = dist[to] + nextWeight;
      pq.offer({to: nextTo, weight: dist[to] + nextWeight});
    }
  }
  return dist;
}

const top = 0;
const parent = i => (i - 1) >>> 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => (a < b)) {
    this._heap = [];
    this._comparator = comparator;
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  peek() {
    return this._heap[top];
  }
  isEmpty() {
    return this._heap.length === 0;
  }
  size() {
    return this._heap.length;
  }
  offer(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    })
    return this.size();
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  poll() {
    const polledValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top)
      this._swap(top, bottom);
    this._heap.pop();
    this._siftDown();
    return polledValue;
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      const pickedNode = (right(node) < this.size() && this._greater(right(node), left(node)) ? right(node) : left(node));
      this._swap(node, pickedNode);
      node = pickedNode;
    }
  }
}
