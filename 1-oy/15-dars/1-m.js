class toys{
    name
    price
    quantity

    constructor(ism,narx,miqdor){
        this.name = ism
        this.price = narx
        this.quantity = miqdor

    }
}
const fullfunction = {
    getall(){
        console.log(this.price * this.quantity);
    }
}


Object.assign(toys.prototype ,fullfunction)

class mevalar{
    name
    price
    quantity

    constructor(nom,narx,miqdor){
        this.name = nom
        this.price = narx
        this.quantity = miqdor

    }

}
Object.assign(mevalar.prototype ,fullfunction)



let a = new toys("moshina",10000,10)
let b = new mevalar("banan",2000,5)
console.log(b);
b.getall()
console.log(a);
a.getall()