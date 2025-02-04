let arr = [1,'2',3,'4',5,'6']

let butun_s = [] 
let string = []
function check(arr1=[]){
    for(let i of arr1){
        if(Number.isInteger(i)){
            butun_s.push(i)
        }else{
            string.push(i)
        }

    }
    return {butun_s,string}

}

let rez = check(arr)
console.log(rez);