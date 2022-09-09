const votes = ["a", "b", "c", "b", "a", "a", "a"];
const uniq = [...new Set(votes)];
let answers = [];

uniq.forEach((e) => {
  answers.push({ name: e, n: 0 });
});

answers.forEach((a) => {
  votes.map((e) => {
    if (e === a.name) {
      a.n += 1;
    }
  });
});

console.log(answers);
