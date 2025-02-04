let unli = 0
let undosh = 0
let bosh = 0
let son = 0
function soz(str){
    for(let i of str){
        if(i == "a" || i=="i" || i=="e" || i=="o" || i=="u"){
            unli += 1
        }else if(i>="a" && i<="z"){
            undosh +=1
        }else if(i.match()){
            son +=1
        }

    
    }
   return {unli,undosh,son}
}

let rez = soz("hello world how are you35345")
console.log(rez);