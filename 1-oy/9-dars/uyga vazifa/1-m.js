function calculate() {
    let son = 0;
    return {
      add(x) {
        console.log(son += x);
      },
      minus(x) {
        console.log(son -= x);
      },
      dev(x) {
        console.log(son /= x);
      },
      mul(x) {
        console.log(son *= x);
      },
    };
  }
  let rez = calculate();
  rez.add(6);
  rez.minus(12);
  rez.dev(40);
  rez.mul(16);
  