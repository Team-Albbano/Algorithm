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
  const [n, ...array]  = input;
  const arr = array.map(Number);
  const pq = new PriorityQueue((a, b) => (a > b));
  let s = '';
  arr.forEach(item => {
    if (item === 0) {
      if (pq.isEmpty())
        s += 0 + '\n';
      else
        s += pq.poll() + '\n';
    }
    else
      pq.offer(item);
  });
  console.log(s);
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
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() === 0;
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
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top)
      this._swap(bottom, top);
    this._heap.pop();
    this._siftDown();
    return poppedValue;
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
      left(node) < this.size() && this._greater(left(node), node) ||
      right(node) < this.size() && this._greater(right(node), node)
    ) {
      const pickedChild = (right(node) < this.size() && this._greater(right(node), left(node)) ? right(node) : left(node));
      this._swap(node, pickedChild);
      node = pickedChild;
    }
  }
}
