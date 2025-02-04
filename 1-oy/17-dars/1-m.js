console.log("hello world");

let a = document.querySelector("#btn")
function  add() {
    document.body.classList.toggle("dark")
    if(btn.textContent =="dark"){
        btn.textContent = "light"

    }else{
        btn.textContent = "dark"
    }
   

    
}
a.addEventListener("click",add)
