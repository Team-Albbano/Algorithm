<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 22233/가희와 키워드

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/22233)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

풀이 설명란

키워드를 담을 배열을 만들어 초기 키워드들을 반복문을 통해 담은 후, 다른 반복문에서 주어진 글들의 단어들을 뽑아 `filter()`를 사용해서 제거해주었다.

제거 후 배열의 길이, 즉 키워드의 개수를 출력하는 식으로 구성했으나 _메모리 초과_ 가 나타났다,,,

처음에는 스프레드 연산자를 통해 다음과 같이 구현했었다.

```javascript
let filter = keyword.filter((el) => el !== memo[j]);
keyword = [...filter];
```

그러나 메모리 초과 문제가 발생하여, 이를 사용하지 않고 진행하여도 결과값이 똑같이 나오길래 다시 시도를 했으나 문제는 해결되지 않았다.

```javascript
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = n.split(' ').map(Number);
let keyword = [];
for (let i = 0; i < N; i++) {
  keyword.push(arr[i]);
}
for (let i = N; i < N + M; i++) {
  let memo = arr[i].split(',');
  for (let j = 0; j < memo.length; j++) {
    keyword = keyword.filter((el) => el !== memo[j]);
  }
  console.log(keyword.length);
}
```

## 소요시간

1시간

## 어려웠던 점

문제는 생각보다 어렵지 않았으나 왜 메모리 초과가 나왔는지 의문이다. 메모리 누수를 줄이는 방법을 공부해야할 것 같다.

## 배운 점

메모리 초과가 왜 나왔는지, 어떻게 하면 이를 해결할 수 있을지를 좀 더 공부를 해보고 와야할 것 같다.

## 궁금한 점

한번 코드 보시고 어떤 점을 수정하면 메모리 초과를 막을 수 있는지 검토 부탁드려요 ㅠㅠ
