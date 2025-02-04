let products = document.querySelector(".box")
function show(arr=[]){
    arr.forEach((element) => {
        products.insertAdjacentHTML(
            "beforeend",
          `<div class = card>
            <h1> ${element.title}</h1>
            <p>${element.category}</p>
            <p> ${element.description}</p
            <p> ${element.rating.rate} - ${element.rating.category}

            <img src = ${element.image} </img>

            <div/>`
        )
    });   
}

fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res=> show(res))
