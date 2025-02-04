let r = document.querySelector("#root");
let iname = document.querySelector("#name");
let inarx = document.querySelector("#narx");
let irang = document.querySelector("#rang");
let irasm = document.querySelector("#rasm");

let btn = document.querySelector("#btn");
let btn_update = document.querySelector("#update");


function del(son) {
    fetch(`https://679a140e747b09cdcccd96ff.mockapi.io/tovar/${son}`, {
        method: "DELETE",
    }).then((res) => location.reload());
}

function create() {
    let ntw = {
        name: iname.value,
        price: inarx.value,
        color: irang.value,
        image: irasm.value,
    };
    fetch("https://679a140e747b09cdcccd96ff.mockapi.io/tovar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ntw),
    }).then((res)=>location.reload())
    
}
btn.addEventListener("click", create);

function update(s) {
    let ntw = {
        name: iname.value,
        price: inarx.value,
        color: irang.value,
        image: irasm.value,
    };

            
    fetch(`https://679a140e747b09cdcccd96ff.mockapi.io/tovar/${s}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(ntw),
    })
    .then((res)=>location.reload())
}


function showFront(arr) {
  arr.forEach((e) => {
    r.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
            <img src="${e.image}" alt="rasm">
            <h1>${e.name}</h1>
            <p>${e.price}</p>
            <p>${e.color}</p>
            <button onClick="del(${e.id})">delete</button>
            <button onClick="update(${e.id})">update</button>
        </div>`
    );
  });
}

fetch("https://679a140e747b09cdcccd96ff.mockapi.io/tovar")
  .then((res) => res.json())
  .then((format) => showFront(format));
