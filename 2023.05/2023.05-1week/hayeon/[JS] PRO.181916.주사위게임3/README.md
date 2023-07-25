<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 181916/주사위게임3

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181916#)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

너무 단순하게 생각해서 배열에 담지않고 계속 a===b... 이런식으로만 했더니 실패했다.
일단 처음엔 숫자가 모두 같을 때 값을 리턴해준다.
2번째는 숫자를 모두 배열에 담은 후 오름차순 정렬을 한다. 그리고 모두 같지 않을 때의 경우를 리턴해준다.
3번째는 2개씩 같을 때 결과값을 리턴한다.
4번째와 5번째는는 같은 개수와 같은 숫자를 담을 변수를 만들어놓고
반복문을 통해 인덱스를 비교하며 같을때 카운트를 해주고 같은 숫자도 변수에 담아준다.
배열에서 같은 숫자를 필터를 통해 배열에서 빼주고 남은 숫자로 조건문을 통해 결과값을 반환하면 된다.

```javascript
function solution(a, b, c, d) {
  if (a === b && b === c && c === d) return 1111 * a;
  const arr = [a, b, c, d].sort();
  const isValidCaseTwo =
    arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[3];
  const isValidCaseThree =
    arr[0] === arr[1] && arr[1] !== arr[2] && arr[2] === arr[3];
  let sameCount = 0;
  let sameNumber = 0;
  if (isValidCaseTwo) return arr[0];
  if (isValidCaseThree) return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      sameCount++;
      sameNumber = arr[i];
    }
  }

  const diffNumber = arr.filter((el) => el !== sameNumber);
  if (sameCount === 1) return diffNumber[0] * diffNumber[1];
  return (10 * sameNumber + diffNumber[0]) ** 2;
}
```

## 소요시간

좀 오래 걸린 것 같음..

## 어려웠던 점

너무 쉽게 생각했고 그냥 a === b === c ... 이런식으로 하면 다 되는 줄 알았는데 아니었다..
배열에 담아서 비교해야겠다는 생각자체를 못했다.

## 배운 점

Math.abs로 절대값을 구할 수 있었다는 걸 다시 기억할 수 있었다. 이런 문제는 배열로 풀어야 하는군..

## 궁금한 점

더 좋은 방법이 있을까용? 😮
