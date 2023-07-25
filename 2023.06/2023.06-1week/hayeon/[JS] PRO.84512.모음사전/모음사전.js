function solution(word) {
  const result = [];
  const str = "";

  const dfs = (word, length, result) => {
    const vowels = ["A", "E", "I", "O", "U"];

    if (length === word.length) {
      result.push(word);

      return;
    }

    vowels.forEach((vowel) => {
      dfs(word + vowel, length, result);
    });
  };

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }

  return result.sort().indexOf(word) + 1;
}
