const obj = { name: "Ali", age: 25, job: "Developer" };

const map = new Map(Object.entries(obj))

console.log(map);

console.log(map.get("name"));
console.log(map.get("age"));
