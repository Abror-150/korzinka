function add(){
    let a = localStorage.getItem("name")
    
    // let i = JSON.parse(a)
    let arr = JSON.parse(a)
    arr.push("2")
    let l = JSON.stringify(arr)
    localStorage.setItem("name",l);


    

    

    
}
add()                           