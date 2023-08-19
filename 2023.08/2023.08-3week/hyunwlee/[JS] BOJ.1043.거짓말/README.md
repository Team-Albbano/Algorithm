# [JS] BOJ 1043/거짓말

[문제 링크](https://www.acmicpc.net/problem/1043)

<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

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
  solution();
  process.exit();
});

let parent = null;

function solution() {
  const [nm, kp, ...parties] = input;
  const [n, m] = nm.split(' ').map(Number);
  const [_, ...knownPeople] = kp.split(' ').map(Number);
  parent = Array.from({length: n + 1}, (_, idx) => idx);
  parties.forEach(party => {
    const [_, ...partyPeople] = party.split(' ').map(Number);
    for (let i = 0; i < partyPeople.length - 1; ++i) {
      union(partyPeople[i], partyPeople[i + 1]);
    }
  })
  for (let i = 1; i < parent.length; ++i)
    find(i);
  let ans = 0;
  parties.forEach(party => {
    const [_, ...partyPeople] = party.split(' ').map(Number);
    let isThereKnown = false;
    for (let i = 0; i < knownPeople.length; ++i) {
      for (let j = 0; j < partyPeople.length; ++j) {
        if (parent[knownPeople[i]] === parent[partyPeople[j]]) {
          isThereKnown = true;
          break;
        }
      }
      if (isThereKnown)
        break;
    }
    if (!isThereKnown)
      ++ans;
  })
  console.log(ans);
}

function union(first, second) {
  first = find(first);
  second = find(second);
  if (first < second) {
    parent[second] = first;
  } else if (first > second) {
    parent[first] = second;
  }
}


function find(num) {
  if (parent[num] === num)
    return num;
  return parent[num] = find(parent[num]);
}
```

## 소요시간
이전 풀이 봄

## 어려웠던 점
union find로 접근하지 않고 습관처럼 노드탐색으로 해결하려 했다.  
앞으로 다른 노드와 연관관계에 치중된다면 union find를 생각해 볼 것 같다.

## 배운 점

## 궁금한 점
