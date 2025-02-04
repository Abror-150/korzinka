
function addTask(){
    fetch("https://679a140e747b09cdcccd96ff.mockapi.io/tovarlar",{
        method : "POST",
        headers:{
         "Content-Type" : "aplication/json"
        },
        body:JSON.stringify({
        name:"Alex",
        price:1213
       }),
        
    }

    )
}
