<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 49993/스킬트리

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/49993)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

1. 결과값을 담을 변수를 만든다.
2. 스킬트리를 map을 돌린다.
   2-1. 스킬트리 배열 = ["BACDE", "CBADF", "AECB", "BDA"] 일 때 각 요소를
   split을 통해 쪼갠다. 그리고 filter를 통해서 skill에 포함된 요소인지 비교해준다.
   2-2. 포함된 요소들만 뽑아서 filteredTrees에 담아준다.
3. 반복문을 통해서 유효성을 확인한다. (스킬트리가 올바른지 확인하기)
4. 이중 반복문 내에서 skill의 요소와 filteredTrees의 요소가 다르다면 isValid를 false로 변경 후 반복문을 끝낸다. (CBD가 순서대로 나와야하는데 아니라면 반복문 끝냄)
5. 마지막으로 조건문을 통해서 isValid가 true이면 결과값을 1증가시키고 결과값을 반환한다. (카운트하기)

```javascript
function solution(skill, skill_trees) {
  let result = 0;

  const filteredTrees = skill_trees.map((tree) => {
    return tree.split("").filter((el) => skill.includes(el));
  });

  for (let i = 0; i < filteredTrees.length; i++) {
    let isValid = true;

    for (let j = 0; j < filteredTrees[i].length; j++) {
      if (skill[j] !== filteredTrees[i][j]) {
        isValid = false;
        break;
      }
    }
    if (isValid) result++;
  }
  return result;
}
```

## 소요시간

구글링보고 풀어서 오래걸리진 않았습니다.

## 어려웠던 점

정신이 혼미해서 혼자 못풀었음 어렵진 않았던 것 같은데 다시 풀어봐야할 것 같음

## 배운 점

includes를 사용해서 비교하는 것과 isValid 변수를 이용하는 것 (혼자 생각하기 아직은 쉽지 않은 것 같음)

## 궁금한 점

더 쉽게 푸는 법이 있을까유
