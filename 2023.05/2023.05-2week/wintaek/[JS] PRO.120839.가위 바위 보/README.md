<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO.120839.가위 바위 보

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120839)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

풀이 설명란

- (1) rsp 는 숫자 0,2,5 로 구성되어있다
- (2) rsp.length 까지 for문으로 하나씩 돌려주고 총 3번을 돈다
- (3) const item 으로 rsp 를 i번쨰 인덱스 지정
- (4) 3번째까지 돌고 난 후 item === "2" 라면 answer 에 0을 집어넣어준다.

```javascript
function solution(rsp) {
  let answer = "";
  for (let i = 0; i < rsp.length; i++) {
    const item = rsp[i];
    if (item === "2") {
      answer += "0";
    } else if (item === "0") {
      answer += "5";
    } else if (item === "5") {
      answer += "2";
    }
  }
  return answer;
}
```

## 소요시간

1시간

## 어려웠던 점

`const item = rsp[i];` 가 사실 이해가 잘 되지 않았습니다. rsp가 3번째 까지 전부 돌고 난 후 서로 비교를 한다고 생각하니 이해가 좀 갔습니다. 아직 index를 사용하는 방법이 어려운것 같습니다.

## 배운 점

## 궁금한 점

제가 쓴 문제풀이 과정이 혹시 맞을까요 ?
