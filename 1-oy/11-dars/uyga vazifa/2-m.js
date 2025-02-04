let word = "hello world how hello are you today"

let arr = []
word = word.split(" ")
function one(arr1){
    for(let i of arr1){
        if(!arr.includes(i)){
            arr.push(i)
    
        }

}
return arr.join(" ")
}
let rez = one(word)
console.log(rez);