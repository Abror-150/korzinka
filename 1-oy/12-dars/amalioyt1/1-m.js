let car = {
    benzin: 100,
    km: 0,
    go(k = 1) {
        this.km += k;
        let s = k * 5;

        this.benzin -= s; 
        console.log(this.benzin);
    },
    zaprafka(son) {
        if (this.benzin <= 100) {
            if (this.benzin + son <= 100) {
                this.benzin += son;
                console.log(this.benzin);
            } else {
                console.log("Bunday to'ldirib bo'lmaydi"); 
            }
        } else {
            console.log("Benzin allaqachon to'liq");
        }
    },
    fullback() {
        console.log(`${100 - this.benzin} shuncha benzin rasxod qilingan`);
        this.benzin = 100; 
    }
};

car.go(10);
car.zaprafka(100);
car.fullback();
