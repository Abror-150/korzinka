let words = ["aziz", "laziz", "non",'madam', "olma"]
let palindrom_lst = []
let palindrom_emas = []
function palindrom(arr=[]){

    let revers = arr.map(word=> word.split("").reverse().join(""))

    for(let i = 0; i<arr.length;i++){
        if(arr[i] ==revers[i]){
            palindrom_lst.push(arr[i])
        }else{
            palindrom_emas.push(arr[i])
        }
    }

    return {palindrom_lst,palindrom_emas}
}
let rez =  palindrom(words)
console.log(rez);