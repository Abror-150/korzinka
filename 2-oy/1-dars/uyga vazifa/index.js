

function oddEven (son) {
    if(son % 2==0){
        console.log(`${son} juft `);
    }else{
        console.log(`${son} toq`);
    }   
}
function checkPrime(son){
    if(son<2)return false

    for(let i = 2; i<=Math.sqrt(son);i++){
        if(son % i ==0) return false
    }
    return true
}
function checkPalindrom(str) {
    let rez = str.split("").reverse().join("")
    if(rez==str){
        console.log(`${str} palindrom so'z`);
    }else{
        console.log(`${str} palindrom so'z emas`);
    }

    
}

function fibonaci_topish(son, a = 0, b = 1) {
    if (son == a) {
      return true;
    }
    if (a > son) {
      return false;
    }
    return fibonaci_topish(son, b, a + b);
  }
  
  function fibonaci(b) {
    const fib = [];
  
    for (let i = 0; i <= b; i++) {
      if (fibonaci_topish(i)) {
        fib.push(i);
      }
    }
    return fib;
  }
  console.log(fibonaci(50));
  

module.exports = {oddEven, checkPrime,checkPalindrom,fibonaci}