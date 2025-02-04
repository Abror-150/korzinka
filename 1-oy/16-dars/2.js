let root = document.querySelector("#root")

function show() {
    let t = localStorage.getItem("task")

    let task = JSON.parse(t)
    root.innerHTML = ""
    task.forEach(element => {
        root.insertAdjacentHTML("beforeend", `<h1> ${element}</h1>`)
        
    });

    
}
show()
function  addTask(soz){
    let t = localStorage.getItem("task")
    let task = JSON.parse(t)
    task.push(soz)
    localStorage.setItem("task",JSON.stringify(task)) 
    show()
}

function remove(str) {
    let t = localStorage.getItem("task")
    let task = JSON.parse(t)  
    let n = task.filter((a)=> a != str)
    localStorage.setItem("task",JSON.stringify(n))
    
    show()  
    
}








