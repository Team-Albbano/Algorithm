<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 1844/게임 맵 최단거리

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/1844)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

BFS로 푸는 풀이이다. queue를 생성 하고 그 안에 있는 값을 빼내와 조건과 비교해준다.

```javascript
function solution(maps) {
  const queue = [];
  const n = maps.length;
  const m = maps[0].length;
  const moveX = [-1, 1, 0, 0];
  const moveY = [0, 0, -1, 1];

  queue.push([0, 0, 1]);

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (curY === n - 1 && curX === m - 1) return move;

    for (let i = 0; i < 4; i++) {
      const movedX = curX + moveX[i];
      const movedY = curY + moveY[i];

      if (
        movedX >= 0 &&
        movedX < m &&
        movedY >= 0 &&
        movedY < n &&
        maps[movedY][movedX] === 1
      ) {
        queue.push([movedY, movedX, move + 1]);
        maps[movedY][movedX] = 0;
      }
    }
  }

  return -1;
}
```

## 소요시간

한 2시간?

## 어려웠던 점

일단 BFS를 잘 몰라서 개념을 공부했다. (왜 이제야 했을까?)
그리고 좌표값이 헷갈려서 오래걸렸다. x축 y축으로 생각하다보니..

## 배운 점

맵을 놓고 봤을 때 (0, 0) 부터 시작하고 (x, y)라고 했을 때..
만약 캐릭터가 (2,2)에 있다 → 왼쪽으로 간다면 (2, 1)이 되니까 왼쪽으로 움직이는 좌표는 (0, -1)이다.
아래쪽으로 간다면 (3, 2)이므로 밑으로 움직이는 좌표는 (1, 0)이 된다.
따라서 [상, 하, 좌, 우] 일 때 moveX = [-1, 1, 0, 0] 이고
moveY = [0, 0, -1, 1]이 된다.

## 궁금한 점

근데 n과 m은 어처피 4로 동일한데 왜 movedX 는 꼭 m까지여야 하나요?
movedX < m 에서 m을 n으로 바꾸면 실패가 뜹니당...
