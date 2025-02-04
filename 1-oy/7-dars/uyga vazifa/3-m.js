let a = 0;
let b = 1;
let end = 100
let t = 0;
console.log(a);
console.log(b);

for (let i = 0; i <= end; i++) {
    t = a + b;
    if(t>100){
        break
    }
  console.log(t);
  a = b;
  b = t;
}