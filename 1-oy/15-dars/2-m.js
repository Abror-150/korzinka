class person{
    name
    age

    constructor(ism, yosh){
        this.name = ism
        this.age  = yosh

    }


}
class Swim{
    name
    

    constructor(ism){
        this.name = ism

    }

}


class bird{
    name
    

    constructor(ism){
        this.name = ism

    }

}

const fullfunction = {
    
    canswim(){
        console.log(`${this.name} suza oladi`);

    },
    
    canWalk() {
        console.log(`${this.name} yura oladi`);
        
    }

}
Object.assign(person.prototype, fullfunction)

const fullfunction2 = {
    
    
    canfly(){
        console.log(`${this.name} ucha oladi`);


    },
    
    canWalk() {
        console.log(`${this.name} yura oladi`);
        
    }

}


Object.assign(bird.prototype, fullfunction2)

const fullfunction3 = {
    
    canswim(){
        console.log(`${this.name} suza oladi`);

    },
    
    canWalk() {
        console.log(`${this.name} yura oladi`);
        
    }

}


Object.assign(Swim.prototype, fullfunction3)



let a = new person("Behzod",16)
a.canWalk()
a.canswim()

let b = new bird("kalibri")
b.canfly()