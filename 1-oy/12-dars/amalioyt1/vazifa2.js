let grades = new Map([
  ["Anvar", 77],
  ["Aziz", 70],
  ["Bobur", 80],
]);
let s = 0;
for (let [key, value] of grades) {
  s = value + value;
  s / 3;
}

console.log(s);
