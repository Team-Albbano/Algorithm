# [JS] PRO 42583/다리를 지나는 트럭

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

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
``

## 소요시간
60분

## 어려웠던 점

## 배운 점

- javascript에서 루프를 통해 node = node.next;를 하면 this.head가 변해있고
c언어는 기존 this.head와 변화가 없네?

JavaScript에서 node = node.next와 같이 코드를 작성하면, this.head가 변경되는 경우에도 node 변수는 새로운 this.head.next를 가리키게 됩니다. JavaScript에서는 객체의 속성에 대한 참조가 직접적으로 연결되기 때문입니다. 따라서 node 변수를 통해 this.head를 변경하거나 수정할 수 있습니다.
그러나 C 언어에서는 포인터 연산을 통해 주소 값을 조작하므로, node = node->next와 같이 작성하는 경우에는 this.head의 값은 변경되지 않습니다. node 변수는 this.head의 주소를 복사한 값이므로, 해당 변수를 수정하더라도 this.head는 변화하지 않습니다.
이는 JavaScript와 C 언어의 차이점 중 하나입니다. JavaScript에서는 객체의 속성에 대한 참조가 실제로 객체를 가리키는 포인터와 유사한 개념으로 작동하지만, C 언어에서는 포인터 연산을 통해 직접적으로 메모리를 조작해야 합니다.

## 궁금한 점
