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
  const [_, ...arr] = input;
  let ans = '';
  arr.forEach(line => {
    const [start, target] = line.split(' ').map(Number);
    const dist = Array.from({length: 10000}, _ => '');
    const from = Array.from({length: 10000}, _ => 0);
    ans += (bfs(start, target, dist, from) + '\n');
    // ans += (retryBFS(start, target, dist, from) + '\n');
  });
  console.log(ans);
}

function bfs(start, target, dist, from) {
  const queue = new LinkedList();
  queue.offer(start);
  let ret = '';
  while (!queue.isEmpty()) {
    const now = queue.poll();
    if (now === target) {
      let to = target;
      console.log('to: ', to);
      while (to !== start) {
        ret += dist[to];
        to = from[to];
      }
      return (ret.split("").reverse().join(""));
    }

    let next = (now * 2) % 10000;
    if (dist[next] === '') {
      queue.offer(next);
      from[next] = now;
      dist[next] = 'D';
    }

    next = (now === 0 ? 9999 : now - 1);
    if (dist[next] === '') {
      dist[next] = 'S';
      from[next] = now;
      queue.offer(next);
    }

    // 문자열을 쪼개면 시간초과 m개를 split한 n개씩보다는,
    // m개를 1번연산으로 하는 것을 추천
    // Bad code
    // let nowS = String(now);
    // if (nowS.length === 3)
    // nowS ='0' + now;
    // else if (nowS.length === 2)
    // nowS ='00' + now;
    // else if (nowS.length === 1)
    // nowS ='000' + now;
    // const [a, b, c, d] = nowS.split('');
    // next = Number(b + c + d + a);
    next = (now % 1000) * 10 + Math.floor(now / 1000);
    if (dist[next] === '') {
      dist[next] = 'L';
      from[next] = now;
      queue.offer(next);
    }
    // next = Number(d + a + b + c);
    next = Math.floor(now / 10) + (now % 10) * 1000;
    if (dist[next] === '') {
      dist[next] = 'R';
      from[next] = now;
      queue.offer(next);
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
