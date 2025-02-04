let users = [
    {name:"alex", ball:44,age:34},
    {name:"jon", ball:66,age:25},
    {name:"konor", ball:50,age:29},
    {name:"alex", ball:70,age:50}
]
function check(arr,bal){
     let rez = arr.filter((word)=>word.ball >=bal && word.age >bal)
     let r = arr.filter((word)=>word.ball <=bal && word.age<bal)
     console.log(rez);
     console.log(r);
}

check(users,45)
