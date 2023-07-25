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

const dx = [0, 0, 0, 0, -1, 1];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [-1, 1, 0, 0, 0, 0];
function solution() {
  const [mnh, ...arr] = input;
  const [m, n, h] = mnh.split(' ').map(Number);
  const startPos = [];
  let map = Array.from({length: h});
  map = map.map(_ => (
    Array.from(Array(n), _ => Array(m).fill(0))
  ));
  let dist = Array.from({length: h});
  dist = dist.map(_ => (
    Array.from(Array(n), _ => Array(m).fill(-1))
  ));
  let i = 0;
  for (let k = 0; k < h; ++k) {
    for (; i < n * (k + 1); ++i) {
      const temp = arr[i].split(' ').map(Number);
      for (let j = 0; j < m; ++j) {
        map[k][i - (n * k)][j] = temp[j];
        if (temp[j] === 1) {
          startPos.push({x: i - (n * k), y: j, z: k});
          dist[k][i - (n * k)][j] = 0;
        }
      }
    }
  }
  const queue = new LinkedList();
  startPos.forEach(pos => {
    queue.offer(pos);
  });
  let ans = 0;
  bfs(map, dist, queue);
  for (let k = 0; k < h; ++k) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        if (map[k][i][j] !== -1 && dist[k][i][j] < 0) {
          console.log(-1);
          return ;
        }
        ans = Math.max(ans, dist[k][i][j]);
      }
    }
  }
  console.log(ans);
}

function bfs(map, dist, queue) {
  while (!queue.isEmpty()) {
    const {x: nowX, y: nowY, z: nowZ} = queue.poll();
    for (let i = 0; i < 6; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      const nz = nowZ + dz[i];
      if (nx < 0 || nx >= map[0].length) {
        continue;
      }
      if (ny < 0 || ny >= map[0][0].length) {
        continue;
      }
      if (nz < 0 || nz >= map.length) {
        continue;
      }
      if (map[nz][nx][ny] !== 0) {
        continue;
      }
      if (dist[nz][nx][ny] !== -1) {
        continue;
      }
      dist[nz][nx][ny] = dist[nowZ][nowX][nowY] + 1;
      queue.offer({x: nx, y: ny, z: nz});
    }
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
