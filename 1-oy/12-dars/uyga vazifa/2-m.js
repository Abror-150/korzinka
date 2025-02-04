function fibonaci_topish(son, a = 0, b = 1) {
  if (son == a) {
    return true;
  }
  if (a > son) {
    return false;
  }
  return fibonaci_topish(son, b, a + b);
}

function fibonaci(a, b) {
  const fib = [];

  for (let i = a; i <= b; i++) {
    if (fibonaci_topish(i)) {
      fib.push(i);
    }
  }
  return fib;
}
console.log(fibonaci(10, 50));
