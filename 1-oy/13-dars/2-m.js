let kun = Number(prompt("Tug'ilgan kunni kiriting "));
let oy = Number(prompt("Tug'ilgan oyni kiriting:")) - 1; 
let yil = Number(prompt("Tug'ilgan yilni kiriting:"));

let bugun = new Date();
let yosh = bugun.getFullYear() - yil;

if (bugun.getMonth() < oy || (bugun.getMonth() === oy && bugun.getDate() < kun)) {
  yosh--;
}

if (bugun.getMonth() === oy && bugun.getDate() === kun ) {
  console.log(`${yosh} yoshga to'ldingiz`);
} else {
  console.log(`${yosh} yoshdasiz.`);
}
