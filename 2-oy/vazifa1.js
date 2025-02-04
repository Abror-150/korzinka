
function phoneNumber(son ="") {
   if(son.length ==9){
       let a = son.startsWith("()")
       let b = son.slice(2,5)
       let d = son.slice(5,7)
       let c = son.slice(7,9)
       let rez = `${a}-${b}-${d}-${c}
       `
       console.log(rez);

   }
    
        
    }
    

phoneNumber("950330810")