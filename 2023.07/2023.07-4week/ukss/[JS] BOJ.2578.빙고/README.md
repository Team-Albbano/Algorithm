<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2578/빙고

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2578)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

bingo 배열에서 map 함수를 돌려 해당 값이 존재할 경우 visited 배열에 1을 넣고, isCross, isLine 함수에서 visited 배열에서 선이 몇개 그여졌는지 조회후 isCross + isLine 값이 3 이상일 경우 빙고 조건이 만족될 경우 찾았을 경우에서의 인덱스 값을 뽑도록 제작했다.

```javascript
const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

const bingo = input.slice(0, 5);
const target = input.slice(5, 10);
const visited = Array.from({ length: 5 }, () => Array(5).fill(0));

// 대각선
const isCross = (visited) => {
    let cnt = 0;
    // 왼쪽 대각선
    if (visited[0][0] && visited[1][1] && visited[2][2] && visited[3][3] && visited[4][4]) {
        cnt++;
    }
    // 오른쪽 대각선
    if (visited[0][4] && visited[1][3] && visited[2][2] && visited[3][1] && visited[4][0]) {
        cnt++;
    }
    return cnt;
};

// 가로, 세로
const isLine = (visited) => {
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
        // 가로
        if (visited[i][0] && visited[i][1] && visited[i][2] && visited[i][3] && visited[i][4]) {
            cnt++;
        }
        // 세로
        if (visited[0][i] && visited[1][i] && visited[2][i] && visited[3][i] && visited[4][i]) {
            cnt++;
        }
    }
    return cnt;
};

const solution = (bingo, target) => {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const check = target[i][j];
            bingo.map((list, idx) => {
                if (list.includes(check)) {
                    visited[idx][list.indexOf(check)] = 1;
                }
            });

            let cross = isCross(visited);
            let line = isLine(visited);

            if (cross + line >= 3) {
                let answer = i * 5 + (j + 1);
                return answer;
            }
        }
    }
};

const answer = solution(bingo, target);
console.log(answer);
```

## 소요시간

2시간

## 어려웠던 점

2차원 배열을 여러개를 섞어서 구성한다는 것에서 너무 복잡하게 생각했던 것 같다.

## 배운 점

구현 문제를 많이 풀어보자;;

## 궁금한 점
