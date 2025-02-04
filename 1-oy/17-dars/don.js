let a = document.querySelector("#bx")

    
    const sozlar = ["tosh","qaychi","qog'oz"]

function random() {

    const randomIndex = Math.floor(Math.random() *3)
    const computer = sozlar[randomIndex]
    
}



let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")

one.addEventListener("click",() =>{
    game("qaychi")
})
    

two.addEventListener("click",() =>{
    game("tosh")
})
three.addEventListener("click",() =>{
   game("qogoz")
    
})

function game(user_choice) {
    const computerCh = random
    console.log(`User tanlovi ${user_choice}`);
    console.log(`computer tanlovi ${computerCh}`);

    if(user_choice == computerCh){
        console.log("Durrang");
    }else if(user_choice == "qaychi" && computerCh=="qogoz" || user_choice=='qogoz' && computerCh=="tosh" || user_choice=="tosh" && computerCh=="qaychi"){
        console.log("user win");
    }else{
        console.log("computer win");
    }
    
}







    



