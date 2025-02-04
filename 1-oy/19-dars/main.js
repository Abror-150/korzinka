function show(arr) {

    
}
const api = axios.create({
    baseURL:"https://679a140e747b09cdcccd96ff.mockapi.io"
})

api.get("/tovar").then((res) => show())

function create(){
    api.post("/tovar", {name:"olma", price:200, color:"black"})
    .then((res) => location.reload(res))

}

function update(son) {
    api
    .put("/tovar")
    
}