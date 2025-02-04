function calc(son1,son2,operator){
    if(operator=="plus"){
        return son1+son2
    } else if(operator=="minus"){
        return son1-son2
    } else if(operator=="kopaytirish"){
        return son1*son2
    } else if(operator=="minus"){
        return son1-son2
    } else{
        return "Bunday amal yo'q"
    }
}

let javob = calc(23,23,"plus") 
console.log(javob)

