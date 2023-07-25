<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120850/문자열 정렬하기 (1)

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120850)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

map으로 돌렸을 떄, 문자열이 Nan으로 바뀌는 모습을 볼 수 있다.

(1) string 을 split 을 통해 배열로 바꿔준다
(2) map으로 Number 로 바꿔주면 문자열 => Nan 으로 변환된다.
(3) NaN 인 부분을 제외하고 난 후 sort로 올므차순 정렬해주면 된다.

```javascript
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}
```

## 소요시간

혼자 생각한 시간 15분
이해한 시간 10분

## 어려웠던 점

아직까진 혼자서 식이 잘 안써진다.

## 배운 점

문자열 -> 배열로 바꾼점
배열 안에 문자가 map으로 돌렸을 떄 Nan 으로 바뀐다는점

## 궁금한 점
