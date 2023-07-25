<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1260/DFS와 BFS

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1260)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

이번엔 두가지 모두 리턴하는 함수를 만들어야했다.
DFS는 stack을 사용해서 푸는 문제라 맨 마지막에 들어온게 먼저 빠지므로
문제의 조건인 "작은 것 먼저 방문" 때문에 내림차순 정렬을 해서 맨 뒤에 것 부터 빼준다.
BFS는 queue를 이용하는 문제고 맨 먼저들어온게 먼저 빠지므로 오름차순 정렬을 통해
맨 앞에 있는 숫자를 먼저 빼주면 된다.
그리고 그래프를 만들 때 카운트 + 1 을 해주는 이유는 배열은 인덱스 번호로 세기때문에 원래 갯수보다 1개 적다.
예를들어 4번까지 있다면 배열을 5개 만들어야 인덱스번호가 4까지 나오기 때문에 +1을 해주어야 한다.

```javascript
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
```

## 소요시간

개념 공부까지 합해서 3시간 넘은 것 같다.

## 어려웠던 점

BFS와 DFS 둘 다 다루는거라 좀 힘들었다.
그리고 주어진 값들을 그래프를 만들어 넣어야하는데 이 부분이 어려웠다.

## 배운 점

그래프를 만드는 방법을 알았다. 처음 보는 방식이라 신기했다.

## 궁금한 점

고칠 점이 있으면 말해주세용.
