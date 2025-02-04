function tub_son(son) {
  if (son < 2) return false;

  for(let i = 2; i <= Math.sqrt(son); i++) {
        if(son % i == 0)return false
  
}
return son
}

function tub_sonlar(a,b){
    const tub = []
    for(let i = a; i<=b;i++){
        if(tub_son(i)){
            tub.push(i)
        }
    }
    return tub
}

console.log(tub_sonlar(50,100));
