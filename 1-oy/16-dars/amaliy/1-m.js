function fn() {
    let a = document.createElement("div")
    a.style.width = '100px'
    a.style.height = '100px'
    a.style.marginLeft = '20px'
    a.style.backgroundColor = 'red'
    document.body.appendChild(a)
    
}

// let b = document.createElement("div")
// b.style.width = '100px'
// b.style.height = '100px'
// b.style.margin = '20px'
// b.style.backgroundColor = 'red'
// document.body.appendChild(b)

[1,2,3].forEach((item)=>{
    item >fn()
})









