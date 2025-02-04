let population = new Map([
    ["Toshkent",2700000],
    ["Samarqand",400000],
    ["Buxoro",450000],
])

let tosh = population.get("Toshkent")
let sam = population.get("Samarqand")

console.log(tosh+sam);