function xisob(ball1,ball2,ball3,ball4,ball5){

    return ball1+ball2+ball3+ball4+ball5/5
    
    
}

let k1 = xisob(12,23,45,5,4)
let k2 = xisob(12,22,45,5,4)
console.log(k1);
console.log(k2);

function win(k1,k2,k3,k4,k5,a1,a2,a3,a4,a5){
   let km1 = win(1+2+3+4+5/5)
   let km2 = win(1+2+3+6+5/5)
   if(km1>km2){
    console.log( "1chi yutdi ")
   } else if(km2>km1){
    console.log( "2chi yutdi ")

    
   }
}
win(1,23,4,5,4,23,43,56,457,75)