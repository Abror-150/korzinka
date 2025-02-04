function fibonac(son,qiymat=0,a=0,b=1){
    if(qiymat==son){
        return 
    } 
    console.log(a);
    fibonac(son,qiymat+1,b,a+b)

}

fibonac(10)