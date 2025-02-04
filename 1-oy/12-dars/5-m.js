// const set1 = new Set([1, 2, 3, 4]);
// const set2 = new Set([3, 4, 5, 6]);

// const rez = new Set([...set1, ...set2])


// console.log(rez);


const set1 = new Set([1,2,3])
const set2 = new Set([3,4,5])

const symetrk_difference = new Set([
    ...[...set1].filter(value=> !set2.has(value)),
    ...[...set2].filter(value=> !set1.has(value))
])

console.log(symetrk_difference);