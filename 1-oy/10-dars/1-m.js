function phone_number(){
    let son = "+998950330810"
    let code= son.slice(0,4)
    let s= son.slice(4,6)
    let a = son.slice(6,9)
    let b = son.slice(9)
    let rez = `${code} ${s} ${a} ${b}`
    console.log(rez); 

}
phone_number()
