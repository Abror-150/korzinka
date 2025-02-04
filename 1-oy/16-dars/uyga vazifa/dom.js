// localStorage.setItem("tasks",JSON.stringify([]))
let root = document.querySelector("#root")

function  show() {
    let t = localStorage.getItem("tasks")

    let task =  JSON.parse(t)
    root.innerHTML = ""

    task.forEach(element => {
        root.insertAdjacentHTML("beforeend",`<h2> ${element} </h2`)

        
    });
        
}
show()


function addTask(str) {
    let t = localStorage.getItem("tasks")
    let task = JSON.parse(t)
    task.push(str)

    localStorage.setItem("tasks",JSON.stringify(task))
    show()

}

function remove(str) {

    let t = localStorage.getItem("tasks")
    let task = JSON.parse(t)
    let n = task.filter((a) => a !=str)
    if(task.length == n.length){
        alert("Bunday soz topilmadi")
    }else{

        localStorage.setItem("tasks",JSON.stringify(n))
        show()
    }
    }
    
