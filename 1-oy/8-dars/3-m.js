
function dondonziki(){
    let user1 = prompt("tosh, qaychi,qog'oz")
    let user2 = prompt("tosh, qaychi,qog'oz")
    if(user1=="tosh" && user2=="tosh"){
        console.log("durrang");
     } else if(user1=="qaychi" && user2=="qaychi"){
            console.log("durrang");
      } else if(user1=="qaychi" && user2=="qaychi"){
                console.log("durrang");
     } else if(user1=="tosh" && user2=="qaychi"){
        console.log("User1 yutti");
    } else if(user1=="tosh" && user2=="qog'oz"){
        console.log("User2 yutti");
    }else if(user1=="qaychi" && user2=="tosh"){
        console.log("User2 yutti");
    } else if(user1=="qog'oz" && user2=="qaychi"){
        console.log("User2 yutti");
    } else if(user1=="qaychi" && user2=="qog'oz"){
        console.log("User2 yutti");
    } 
}

dondonziki()
