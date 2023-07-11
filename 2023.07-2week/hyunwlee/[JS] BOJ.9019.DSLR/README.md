# [JS] BOJ 9019/DSLR

[문제 링크](https://www.acmicpc.net/problem/9019)

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

```
## 소요시간

## 어려웠던 점

BOJ 9095(1, 2, 3 더하기) => DP // 가능 경우 수  
BOJ 1697(숨바꼭질) => BFS // 최단  
BOJ 9019(DSLR) => BFS // 최단  
  
---
  
- 시간초과났음 그래서 다음 방법들을 취함
1. 모든 dist값을 계산하지 않고 current === target이면 종료시킴  
=> 응 그래도 초과야  
  
2. dist안에 값을 일일이 더하는 연산작업이 오래걸리는 듯. 덧셈연산 x
=> 맞다 이거였다.  
  
문자열을 쪼개면 시간초과 m개를 split한 n개씩보다는,  
m개를 1번연산으로 하는 것을 추천  
  
- Bad code
```
  let nowS = String(now);
  if (nowS.length === 3)
    nowS ='0' + now;
    else if (nowS.length === 2)
    nowS ='00' + now;
  else if (nowS.length === 1)
    nowS ='000' + now;
    const [a, b, c, d] = nowS.split('');
  next = Number(b + c + d + a);
```
- Good code
```
  next = (now % 1000) * 10 + Math.floor(now / 1000);
```

## 배운 점

## 궁금한 점
