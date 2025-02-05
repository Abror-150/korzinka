let div = document.querySelector("#root");
let narx = document.querySelector("span")

let api = axios.create({
    baseURL: "https://679a140e747b09cdcccd96ff.mockapi.io"
  });
function del(son) {
    let bas = localStorage.getItem("basket");
    let arr = JSON.parse(bas);
    let filterr = arr.filter((p) => p != son)
    console.log(filterr);
    localStorage.setItem("basket",JSON.stringify(filterr))
    location.reload()

}
function show(arr) {
    arr.forEach((e) => {
      div.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <img src="${e.image}" alt="rasm">
              <h1>${e.name}</h1>
              <p>${e.price}</p>
              <p>${e.color}</p>
            <button onClick = "del(${e.id})" >delete</button>
  
         </div>`
      );
    });
  }

  async function getData() {
    let res = await api.get("/tovar");
    let bas = localStorage.getItem("basket");
    let arr = JSON.parse(bas);
    let filterr = res.data.filter((p) =>arr.includes(+p.id))
    let sum = filterr.reduce((acc,e) => acc + e.price, 0)
    narx.innerText = sum
    show(filterr)
  }

getData()