function dondon_ziki(){
    let user = prompt("tosh qaychi qogozlaarni birini  kiriting")
    const sozlar = ["tosh","qaychi","qog'oz"]
    const randomIndex = Math.floor(Math.random() * sozlar.length)
    const computer = sozlar[randomIndex]
    if(user=="tosh" && computer=="qaychi" || user=="qaychi" && computer=="qogoz" || user=="qogoz" && computer=="tosh"){
        console.log("user1 win");
    }else if(user==computer){
        console.log("durrang");
    }else{
        console.log("Computer win");
    }
}
dondon_ziki()