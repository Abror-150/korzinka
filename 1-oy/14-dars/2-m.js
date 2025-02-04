
// const fn = (n1) =>{
//     return (n2) => [(n1*2), () => n2 * 2]
// } 

// const [a,b] = fn(2)(3)
// console.log(a+b());

const fn = (n1,n2) =>{
   return (n3) => [{x:n1, y: n2}, {z: () => n3}]
}
const [{x,y},{z}] = fn(3,4)(5)
console.log(x+y*z());