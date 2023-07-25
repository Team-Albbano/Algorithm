function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i]; // 문자를 꺼냄
    const isCapital = char < "a"; // 대문자인지 판별.
    //아스키코드값을 보면 소문자 대문자 비교시 소문자가 대문자보다 더 크다
    if (isCapital) {
      answer += char.toLowerCase();
    } else {
      answer += char.toUpperCase();
    }
  }
  return answer;
}
