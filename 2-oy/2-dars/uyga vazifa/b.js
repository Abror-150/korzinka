const fs = require("fs");

function addToFile(filename, amount) {
    fs.appendFileSync(filename, amount + "\n", "utf8");
}

function deposit(amount) {
    addToFile("kirim.txt", amount);
}

function withdraw(amount) {
    addToFile("chiqim.txt", amount);
}

function getBalance() {
    const readSum = (filename) =>
        fs.existsSync(filename)
            ? fs.readFileSync(filename, "utf8").split("\n").reduce((sum, num) => sum + (parseFloat(num) || 0), 0)
            : 0;

    let kirim = readSum("kirim.txt");
    let chiqim = readSum("chiqim.txt");

    console.log(`Kirim: ${kirim} so'm`);
    console.log(`Chiqim: ${chiqim} so'm`);
    console.log(`Balans: ${kirim - chiqim} so'm`);
}

// Test qilish
deposit(100);
withdraw(5000);
getBalance();
