let root = document.querySelector('#root')
function addtask(soz){
    let text = document.createElement('h2')
    text.textContent = soz
    root.prepend(text)

}

