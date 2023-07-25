<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 17686/파일명정렬

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/17686)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

1. 숫자가 나오기 전까지 문자열을 추출, 소문자로 변환해 aHead, bHead에 저장한다.

- ^ : 문자열의 시작
- \D : 숫자가 아닌 문자
- - : 앞의 표현식이 1회 이상 연속 반복

2. file명의 숫자를 추출, replace(/^0+/,"")를 통해 앞의 0을 제거한다.

- \d : 숫자
- - : 앞의 표현식 1회 이상 반복

3. localeCompare()는 참조 문자열이 정렬 순서에서 앞 또는 뒤에 오는지 또는 주어진 문자열과 같은지 숫자로 반환한다.

- referenceStr.localeCompare(compareStr) 일 때, referenceStr이 compareStr보다 앞에 있으면 -1, 뒤에 있으면 1, 같으면 0을 반환한다.

ex>
'a'.localeCompare('b') // -1 ,
'b'.localeCompare('a') // 1
'c'.localeCompare('c') // 0

4. 마지막으로 문자열이 먼저나오고, 숫자가 더 앞인 파일명을 리턴해준다.

```javascript
function solution(files) {
  const HEAD_REGEX = /^\D+/;
  const NUMBER_REGEX = /\d+/;

  return files.sort((a, b) => {
    const aHead = a.match(HEAD_REGEX)[0].toLowerCase();
    const bHead = b.match(HEAD_REGEX)[0].toLowerCase();
    const aNum = a.match(NUMBER_REGEX)[0].replace(/^0+/, "");
    const bNum = b.match(NUMBER_REGEX)[0].replace(/^0+/, "");
    return aHead.localeCompare(bHead) || aNum - bNum;
  });
}
```

## 소요시간

기억은 안나는데 혼자 못풀어서 시간이 좀 걸렸음

## 어려웠던 점

정규표현식으로 푸는게 좀 어려웠당....

## 배운 점

정규표현식과 localeCompare에 대해서 배웠다.
정규표현식 사용하지 않고 푸는 법도 있다고 하는데 아직 공부를 못했다.

## 궁금한 점

다른 방법이 있을가용?
