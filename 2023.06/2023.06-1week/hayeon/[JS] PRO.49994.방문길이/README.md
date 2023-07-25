<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 49994/방문길이

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/49994)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

1. 최대, 최소 길이를 설정한다.
2. 중복하는 경로의 길이를 제거하기 위해 new Set()사용
3. 상하좌우 좌표, 현재 위치를 설정한다.
4. 유효성 검사를 통해 맵 내에서 돌 수 있도록 설정한다.
5. for문을 통해 dirs를 방문하고 범위가 유효하다면 checkSet안에 추가해준다.
6. 순서를 바꿔가며 넣어준 이유는 [0,0] -> [0,1] 과 [0,1] -> [1,0] 이동결과가 같기 때문에 순서를 바꿔 2번 넣어서 중복을 방지한다.
7. 마지막에 모든 경우를 2로 나눠 답을 구한다.

```javascript
function solution(dirs) {
  // 1. 최대, 최저 길이 설정
  const MAX_LENGTH = 5;
  const MIN_LENGTH = -MAX_LENGTH;

  // 2. 중복 제거 Set 사용
  const checkSet = new Set();

  // 3. 상하좌우 좌표 설정
  const moves = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  // 4. 현재 포지션 설정
  let curPosition = [0, 0];

  // 5. 유효성 검사
  const getIsValid = (x, y) => {
    if (x < MIN_LENGTH || y < MIN_LENGTH || x > MAX_LENGTH || y > MAX_LENGTH) {
      return false;
    }
    return true;
  };

  // 6. for문을 통해 dirs 돌기
  for (const dir of dirs) {
    const [dx, dy] = moves[dir];
    const [curX, curY] = curPosition;
    const [nx, ny] = [curX + dx, curY + dy];

    // 7. 범위가 유효하다면 실행할 것
    if (getIsValid(nx, ny)) {
      curPosition = [nx, ny];

      checkSet.add(`${curX}${curY}${nx}${ny}`);
      checkSet.add(`${nx}${ny}${curX}${curY}`);
    }
  }
  // 8. 2로 나누어서 반대방향으로 오고가는 경우를 하나로 합친다.
  return checkSet.size / 2;
}
```

## 소요시간

풀이를 보고 이해해서 오래걸리진 않았다.

## 어려웠던 점

checkSet에 2번 넣어주는 이유가 처음에 헷갈렸다.

## 배운 점

set을 이용하는 방법 (중복 제거)

## 궁금한 점

리뷰 부탁드려횽
