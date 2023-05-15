const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  // 1. input값 구조분해할당으로 받아오기
  const [count, line, start] = input[0].split(" ").map(Number);
  // 2. 그래프를 위한 빈 배열 만들기
  const graph = [...Array(count + 1)].map((e) => []);

  // 3. 반복문을 통해 그래프에 인접한 경로들을 넣어주기
  for (let i = 1; i <= line; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  // 4. dfs함수
  const dfs = (graph, startNode) => {
    // 스택을 이용하기위해 배열 생성 (방문을 해야하는 배열)
    let needVisitStack = [];
    // 방문 한 배열을 담는 곳
    const visited = [];

    // 방문이 필요한 곳에 먼저 시작점을 넣어준다.
    needVisitStack.push(startNode);

    // 방문이 필요한 배열의 길이가 0이 아닐 때 (빈 배열이 아닐 때)
    while (needVisitStack.length !== 0) {
      // 방문이 필요한 배열 스택의 가장 뒤 숫자를 떼준다.
      const node = needVisitStack.pop();

      // 만약 방문 한 배열에 가장 뒤의 숫자가 포함되지 않는다면 (조건)
      if (!visited.includes(node)) {
        // 방문 한 배열에 그 숫쟈를 넣는다.
        visited.push(node);

        // 그래프에서 해당하는 숫자의 배열을 담아준다.
        const nodes = graph[node];
        // 방문이 필요한 스택 배열에 스프레드 연산자로 합쳐서 넣어준다. (내림차순을 통해 작은숫자가 가장 뒤로 오게 할 것)
        needVisitStack = [...needVisitStack, ...nodes.sort((a, b) => b - a)];
      }
    }

    // 방문한 배열을 리턴한다.
    return visited;
  };

  // 5. bfs 함수 (풀이 방식은 동일하다. 오름차순으로 넣는 것만 다름)
  const bfs = (graph, startNode) => {
    let needVisitQueue = [];
    const visited = [];

    needVisitQueue.push(startNode);

    while (needVisitQueue.length !== 0) {
      const node = needVisitQueue.shift();

      if (!visited.includes(node)) {
        visited.push(node);
        const nodes = graph[node];
        needVisitQueue = [...needVisitQueue, ...nodes.sort((a, b) => a - b)];
      }
    }

    return visited;
  };

  // 결과값에 각각의 함수를 호출하고 줄바꿈한 값을 넣어준다.
  const result = `${dfs(graph, start).join(" ")}\n${bfs(graph, start).join(
    " "
  )}`;

  console.log(result);
});
