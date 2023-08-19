const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

const solution = _ => {
  const [nmx, ...lines] = input;
  const [n, m, x] = nmx.split(' ').map(Number);
  const list = Array(n + 1).fill(0).map(_ => []);
  const reverseList = Array(n + 1).fill(0).map(_ => []);
  lines.forEach(line => {
    const [start, end, weight] = line.split(' ').map(Number);
    list[start].push({end, weight});
    reverseList[end].push({end: start, weight});
  })
  const dist = dijkstra(x, n, list);
  const reverseDist = dijkstra(x, n, reverseList);
  let ans = 0;
  for (let i = 1; i <= n; ++i) {
    if (i === x)
      continue;
    ans = Math.max(ans, dist[i] + reverseDist[i]);
  }
  console.log(ans);
}

const dijkstra = (start, n, list) => {
    const dist = Array(n + 1).fill(Infinity);
    const check = Array(n + 1).fill(false);
    const pq = new PriorityQueue((a, b) => (a.weight < b.weight));
    pq.offer({end: start, weight: 0});
    dist[start] = 0;
    while (!pq.isEmpty()) {
      const {end} = pq.poll();
      if (check[end])
        continue;
      check[end] = true;
      for (const {end: nextEnd, weight: nextWeight} of list[end]) {
        if (check[nextEnd])
          continue;
        if (dist[nextEnd] <= (dist[end] + nextWeight))
          continue;
        dist[nextEnd] = dist[end] + nextWeight;
        pq.offer({end: nextEnd, weight: dist[nextEnd]});
      }
    }
  return dist;
}
const top = 0;
const parent = i => (i - 1) >>> 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[top];
  }
  offer(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
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
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}
