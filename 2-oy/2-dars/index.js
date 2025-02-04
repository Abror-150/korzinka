
// const f = require("fs")
// function add(str) {
//    f.writeFile("todolst.txt",`${str}\n`,{flag:"a"},(e)=>{
//     if(e){
//         console.log("error");

//     }else{
//         console.log("dfsk");
//     }
//    })
    
// }
// function read() {
//     f.readFile("todolst.txt", {encoding: "utf-8"},(e,d)=>{
//         console.log(e);
//     })
    
// }

// add('salom')
// add('salom2')
// add('salom3')
// read()
let f = require("fs")
let user
let ag

function register(n,a){
    f.writeFile("reg.txt",`${n} ${a}\n`, {flag:"a"}, (n) =>{
        user = n
        ag  = a
        if(n){
            console.log("error");
        }

    } )
}

function login(name,age) {
    f.readFile("reg.txt","utf-8", (err,data) =>{
        if(err){
            console.log("error");
        }
    let users = data.trim().split("\n")
    let a= users.some(user =>{
        let [n, a] = user.split(" ")
        return n == name && a == age
    })
    if(a){
        console.log("tizimga kirdingiz");
    }else{
        console.log('ism yoki yosh xato kiritildi');
    }
    })
   

    
}
register("ali","23")
login("ali","26")
