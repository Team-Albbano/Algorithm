<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 4948/베르트랑 공준

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/4948)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

에라토스테네스의 체 공식을 사용하기 전에 제작한 코드

```jsx
for (let item of input) {
    if (item === 0) break;
    else {
        const arr = [];

        for (let i = item + 1; i <= item * 2; i++) {
            let stat = true;
            for (let j = 2; j < Math.floor(i / 2); j++) {
                if (i % j === 0) {
                    stat = false;
                }
            }
            stat && arr.push(i);
        }
        console.log(arr.length);
    }
}
```

결과 : 100000 을 검사하던 중 시간 초과가 발생

=> **"에라토스테네스의 체"** 알고리즘을 사용하여 해결

<img src="./src/1026js.gif">

> 출처 : [바로가기](https://mine-it-record.tistory.com/507)

1. 2부터 소수를 구하고자 하는 구간의 모든 수를 나열한다. (그림에서 회색 사격형으로 두른 수들이 해당한다.)

2. 2는 소수이므로 오른쪽에 2를 쓴다.

3. 자기 자신을 제외한 2의 배수를 모두 지운다.

4. 남아있는 수 가운데 3은 소수이므로 오른쪽에 쓴다.

5. 자기 자신을 제외한 3의 배수를 모두 지운다.

6. 남아있는 수 가운데 5는 소수이므로 오른쪽에 쓴다.

7. 자기 자신을 제외한 5의 배수를 모두 지운다.

8. 남아있는 수 가운데 7은 소수이므로 오른쪽에 쓴다.

9. 자기 자신을 제외한 7의 배수를 모두 지운다.

10. 위의 과정을 반복하면 구하는 구간의 모든 소수가 남는다.

```javascript
const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

for (let item of input) {
    if (!item) {
        break;
    } else {
        let max = item * 2;
        let arr = Array(max + 1)
            .fill(true)
            .fill(false, 0, 2);
        let res = [];

        for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
            let j = 2;
            while (i * j <= max) {
                arr[i * j] = false;
                j++;
            }
        }

        for (let i = item + 1; i <= max; i++) {
            if (arr[i]) {
                res.push(i);
            }
        }

        console.log(res.length);
    }
}
```

## 소요시간

1 시간

## 어려웠던 점

## 배운 점

에라토스테네스 체 알고리즘을 학습

## 궁금한 점
