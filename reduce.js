const votes = ["a", "b", "c", "b", "a", "a", "a"];

let answers = votes.reduce(function (prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

console.log(answers);
