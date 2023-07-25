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
