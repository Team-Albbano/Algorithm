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
