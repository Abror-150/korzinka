function faktorial(son){
    if(son==0 ){
        return 1
    }
    return son*faktorial(son-1) 
    
}

let rez = faktorial(5)
console.log(rez);
