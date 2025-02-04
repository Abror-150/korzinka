// localStorage.setItem("texts",JSON.stringify([]))
let btn = document.querySelector("#btn");
let button = document.getElementById("add");
let container = document.getElementById("input-container");

let matn = JSON.parse(localStorage.getItem("texts")) || [];

function darkMode() {
    document.body.classList.toggle("dark");

    if (btn.textContent === "dark") {
        btn.textContent = "light";
    } else {
        btn.textContent = "dark";
    }
}

btn.addEventListener("click", darkMode);

function load() {
    container.innerHTML = "";

    matn.forEach((task, indeks) => {
        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = 'Yangi vazifani kiriting';
        input.value = task; 
        container.appendChild(input);

        input.addEventListener("input", function () {
            matn[indeks] = input.value;
            localStorage.setItem("texts", JSON.stringify(matn));
        });
    });
}

window.addEventListener("load", load);

button.addEventListener("click", function () {
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = 'Yangi vazifani kiriting';
    container.appendChild(input);

    matn.push("");
    localStorage.setItem("texts", JSON.stringify(matn));

    input.addEventListener("input", function () {
        matn[matn.length - 1] = input.value;
        localStorage.setItem("texts", JSON.stringify(matn));
    });
});