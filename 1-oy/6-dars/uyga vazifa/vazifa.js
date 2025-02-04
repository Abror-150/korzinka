let yosh = prompt("Yoshingizni kiriting:")

if(1<yosh && 7>yosh){
    alert("Bog'cha")
} else if(yosh>=7 && yosh<=18){
    alert("Maktab o'quvchisi")
} else if(yosh>18 && yosh<25){
    alert("Universitet")
} else if(yosh>25 && yosh<35){
    alert("Ishlovchi")
} else{
    alert("Pensiyaner")
}