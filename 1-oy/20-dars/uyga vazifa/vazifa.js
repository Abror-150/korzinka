let api = axios.create({
  baseURL: "https://679a140e747b09cdcccd96ff.mockapi.io",
});
let div = document.querySelector("#root");
let bas = localStorage.getItem("basket");
if (!bas) {
  localStorage.setItem("basket", JSON.stringify([]));
}

function addB(ob) {
  let bas = localStorage.getItem("basket");
  let arr = JSON.parse(bas);
  arr.push(ob);
  localStorage.setItem("basket", JSON.stringify(arr));
}

function show(arr) {
  arr.forEach((e) => {
    div.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
            <h1>${e.name}</h1>
            <p>${e.price}</p>
            <p>${e.color}</p>
          <button onClick = "addB(${e.id})" >buy</button>

       </div>`
    );
  });
}

async function get() {
  let res = await api.get("/tovar");
  show(res.data);
}
get();
