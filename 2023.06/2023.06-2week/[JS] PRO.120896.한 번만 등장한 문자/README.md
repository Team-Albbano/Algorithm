<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120896/한 번만 등장한 문자

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120896)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

(1) object를 이용하여 문제풀이를 진행하였습니다

(2) 첫번쨰 for문은 탐색을 위해 사용하였고, item 은 s에 나오는 단어들의 index 번쨰 단어들을 하나씩 꺼내줍니다.

(3) 만약 item 이 똑같은게 계속 나온다면 +1 씩 해주고 아니라면 1로만 정해줍니다.

(4) object 에 entries 를 이용하여 key,value 값으로 묶어줍니다.

(5) 두번째 for문에서는 만약 item[1] 이라면 한번만 나온 다넝이니 answer에 푸쉬를 해줍니다.

(6) 제한사항에서 문자를 사전 순으로 정렬하여야 하니 sort를 사용하였습니다.

(7) str.charCodeAt() 은 문자열을 반환하여서 a.charCodeAt(0)-b.charCodeAt(0)); 라고 사용하였습니다.

(8) join 은 배열을 다시 문자열로 반환해주기 위해서 사용하였습니다.

```javascript
const obj = {};

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i]; // s에 단어들을 하나씩 꺼내서 출력할 변수 하나 생성
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  const objArray = Object.entries(obj);
  for (let i = 0; i < objArray.length; i++) {
    const item = objArray[i]; // ['a',1];
    if (item[1] === 1) {
      answer.push(item[0]);
    }
  }
  const sortedArray = answer.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  sortedArray.join("");
  return sortedArray.join("");
}
```

## 소요시간

60분

## 어려웠던 점

## 배운 점

## 궁금한 점
