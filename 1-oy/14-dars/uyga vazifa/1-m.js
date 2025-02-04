class Balance {
  #ism;
  #yil;
  #balance;
  #qarz = 0;
  constructor(ism, yil, balance) {
    this.#ism = ism;
    this.#yil = yil;
    this.#balance = balance;

    let now = new Date();
    let sana = now.getFullYear();
    let rez = sana - yil;

    if (rez < 20) {
      throw new Error("sizning yoshingiz yetmaydi");
    }
    

  }
  withdraw(s) {
    if (s >this.#balance) {
      console.log("Hisobingizda pul yetarli emas");
    } else {
      console.log(`${s} som pul yechildi`);
      this.#balance -= s;
      console.log(`Balanceda ${this.#balance} som pul qoldi`);
    }
  }
  deposite(s) {
    if (s > 0) {
      console.log(`${s} som qo'shildi `);
      this.#balance += s;
      console.log(`Hozirgi balance ${this.#balance} som `);
    } else {
      console.log("Bunday pul kiritib bo'maydi");
    }
  }

  credit(s) {
    if (s > 0) {
      console.log(`Balancega ${s} som qo'shildi`);
      this.#balance += s;
    } else {
      console.log("Bunday pul kiritib bo'lmaydi");
    }
    console.log(`Hozirgi balance ${this.#balance} som `);
    this.#qarz += s;
    console.log(`Qarzingiz ${this.#qarz} som bo'ldi`);
  }
  creditTolash(s) {
    this.#balance -= s;
    console.log(`${s} som credit to'landi`);
    this.#qarz -= s;

    console.log(`Qarzingiz ${this.#qarz} som qoldi`);
    
  }

  creditYopish() {
    if (this.#balance > this.#qarz) {
      this.#balance -= this.#qarz;
      console.log("Creditingiz yopildi");
      this.#qarz = 0;
      console.log("qarzingiz qolmadi");
    } else{
      this.#qarz -=this.#balance
      console.log(`Qarzingiz ${this.#balance} som tolandi. Qolgan qarzingiz ${this.#qarz} som.`);
      this.#balance = 0
    }
  }
}

let user = new Balance("Alex", 2000, 600);
user.withdraw(200);
user.credit(1000);
user.creditTolash(300);
user.creditYopish();
