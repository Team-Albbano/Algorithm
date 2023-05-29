<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120890/가까운 수

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120888)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

풀이 설명란

**코드 중에 이해가 되지 않아 아는곳까지 적어보겠습니다.**

(1) array 중에서 n 에 가장 가까운 수를 찾는것이기 때문에 절대값을 사용하여 문제를 풀이하였습니다.

(2) 제한사항 중 '가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다' 때문에 오름차순으로 정의를 하였습니다.

(3) answer에 Math.abs 를 활용하여 n - array[i] 까진 이해를 하였으나

(4) 배열로 만들기 위해 spread 를 사용하였고, 그 중에서 제일 작은값이 n과 가까운 숫자이니 Math.min 을 사용한것 까지 이해를 했습니다.

(5) b = answer.indexOf(a) 를 왜 한건지 도통 모르겠습니다. indexOf 는 요소를 발견하면 해당 요소의 인덱스를 반환한다. 라는 정의는 알고있습니다.

```javascript
function solution(array, n) {
  array.sort((a, b) => a - b);
  let a = 0;
  let b = 0;
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    answer.push(Math.abs(n - array[i]));
    a = Math.min(...answer);
    b = answer.indexOf(a);
  }
  return array[b];
}
```

## 소요시간

2시간

## 어려웠던 점

## 배운 점

## 궁금한 점

전부 다 이해하면서 풀지 못하였습니다.
