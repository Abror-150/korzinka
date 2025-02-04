
let all = document.querySelector(".box")
let inp = document.querySelector("#inpt")

all.addEventListener("click" ,(e) =>{
    let a = e.target

    if(a.closest(".number")){
        inp.value +=a.textContent
    } else if(a.closest(".result")){
        inp.value +=eval(inp.value)
    }

})












