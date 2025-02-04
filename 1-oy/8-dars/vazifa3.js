function lucky(arr){

    for(let i = 0; i<arr[i];i++){
        if(arr[i]==1 || arr[i]==3 || arr[i]==13){
            return false
            
        } else{
            return true
        }
            
    }

}

let rez = lucky([2,2,4,4,5,11])
console.log(rez);