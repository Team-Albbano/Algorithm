<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 42583/다리를 지나는 트럭

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

1. 스택/큐로 푸는 문제라 큐 배열을 새로 만든다.
2. 시간을 구해야하는거라 한 과정을 반복할 때마다 1초씩 증가시키기 위한 time 변수 생성
3. 반복문 내 다리에 올릴 수 있는 최대 무게 때문에 무게를 합할 weightSum 변수 생성
4. queue에 값이 있을 때까지 반복한다.
5. 반복문을 돌때마다 1초씩 증가하고, 큐 배열내 첫번째 값을 떼온다. (다리에 올릴 첫번째 트럭)
6. 그리고 그 자동차 무게를 sum 변수에 더해준다.
7. 조건문을 이용해 트럭 무게를 담은 배열에 값이 있다면, 트럭 배열 가장 첫번째 값(인덱스 0번)에서 다리 위에 올라간 트럭 무게를 뺐을 때 최대 무게보다 작다면
   현재 트럭 변수에 인덱스 0번을 떼서 할당한다.
8. 그리고 합계에서 그 트럭무게를 빼줌
9. 큐배열에 현재 트럭 무게를 넣음
10. 근데 만약에 조건문을 만족하지 않으면 다시 큐를 bridge_length 길이 만큼 맞춰야 해서 0을 넣어줌.

```javascript
function solution(bridge_length, weight, truck_weights) {
  const queue = new Array(bridge_length).fill(0);
  let time = 0;
  let weightSum = 0;

  while (queue.length) {
    time++;

    const queueFirst = queue.shift();
    weightSum += queueFirst;

    if (truck_weights.length) {
      if (truck_weights[0] - weightSum <= weight) {
        const curTruck = truck_weights.shift();

        weightSum -= curTruck;
        queue.push(curTruck);
      } else {
        queue.push(0);
      }
    }
  }

  return time;
}
```

## 소요시간

이 문제도 이해하는데 오래걸렸습니다........

## 어려웠던 점

이해는 했는데 저런 흐름으로 푸는 법을 혼자 생각하지 못하겠음

## 배운 점

while문 활용하기!

## 궁금한 점

좀 더 쉽게 푸는 방법이 있을 것 같아요.
