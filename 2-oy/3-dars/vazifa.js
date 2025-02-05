const Emitter = require("events");
const { emit } = require("process");
let emitter = new Emitter();

let foods = {
  1: { name: "osh", price: 35000 },
  2: { name: "burger", price: 18000 },
  3: { name: "lavash", price: 24000 },
  4: { name: "kola", price: 30000 },
  5: { name: "fanta", price: 15000 },
};

let staff = {
  1: { name: "ali", balance: 0 },
  2: { name: "bobr", balance: 0 },
  3: { name: "kamron", balance: 0 },
  4: { name: "ikrom", balance: 0 },
  5: { name: "komil", balance: 0 },
};

let foyda = 0;
emitter.on("zakaz", (order, count) => {
  order.forEach((element) => {
    console.log(`oshpaz: ${foods[element].name}, ${count}ta`);
  });
});

emitter.on("zakaz", (order, count, staff_id) => {
  order.forEach((element) => {
    staff[staff_id].balance += ((foods[element].price * count) / 100) * 10;
  });
  let oylik = staff[staff_id].balance;
  console.log(`${staff[staff_id].name} oyligi: ${oylik}-som`);
});

emitter.on("zakaz", (order, count) => {
  order.forEach((element) => {
    foyda += foods[element].price * count;
  });
  console.log(`foyda: ${foyda}-som`);
});

emitter.emit("zakaz", [2, 3, 1], 2, 1);
