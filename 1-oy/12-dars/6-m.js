const set1 = new Set([1,2,3])
const set2 = new Set([3,4,5])

const differce = new Set([...set1].filter(value=> !set2.has(value)))

console.log(differce);