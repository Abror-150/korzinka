class Car {
  model;
  fullbenzin;
  #benzin;
  #km;
  rasxod;
  #xarajat;

  constructor(name, fullbenzin, rasxod) {
    this.model = name;
    this.fullbenzin = fullbenzin;
    this.rasxod = rasxod;
    this.#benzin = fullbenzin;
  }
  go(k = 1) {
    this.#km += k;
    let sarf = this.#km * this.rasxod;
    if (this.#benzin > sarf) {
      this.#benzin += this.#km;
      this.#benzin -= sarf;
      let m = this.#km * this.rasxod;
      console.log(
        `${this.#km} km masofa yurdi.${m} litr benzin ketdi ${
          this.#benzin
        } litr benzin qoldi`
      );
    } else {
      console.log("iltimos benzin yetarli emas zaprafka qiling");
    }
  }

  zaprafka(son) {
    if (this.#benzin <= this.fullbenzin) {
      if (this.#benzin + son <= this.fullbenzin) {
        this.#benzin += son;
        console.log(`Zaprafka qilindi . Hozirgi benzin ${this.#benzin} litr`);
      } else {
        console.log("Bunday to'ldirib bo'lmaydi, limitdan oshib ketdi");
      }
    } else {
      console.log("Benzin allaqachon to'liq");
    }
  }

  fullback() {
    console.log(`${this.fullbenzin - this.#benzin}`);
    this.#benzin = this.fullbenzin;
  }

  check() {
    console.log(
      `${this.model} ${this.fullbenzin} ta benzin ketadi  shuncha rasxod ${this.rasxod} ketgan `
    );
  }

  tur(narx) {
    if (narx == 80) {
      console.log(
        `${this.#benzin * 8000} lik benzin  bo'ldi  shuncha xarajat bo'ldi`
      );
    } else if (narx == 92) {
      console.log(
        `${this.#benzin * 12000} lik benzin  bo'ldi shuncha xarajat bo'ldi`
      );
    }
  }
}

let captiva = new Car("Captiva", 150, 13);
let nexia = new Car("nexia3", 100, 5);
console.log(captiva.go(10));
console.log(captiva.zaprafka(10));
// console.log(captiva.check());
// console.log(nexia.go(10));
// console.log(nexia.zaprafka(10));

console.log(captiva.tur(80));
