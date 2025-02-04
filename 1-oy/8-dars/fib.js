function fibonac(son,qiy){
    if(qiy<=0){
        return son
    }
    return son +fibonac(son-1) +fibonac(son-2)
}

let rez = fibonac(5,1)
console.log(rez);