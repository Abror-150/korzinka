const map = new Map([
    ["name", "Ali"],
    ["age", 25],
    ["country", "Uzbekistan"],
    ["isMarried", false],
  ]);
  s = 0
for(const[key] of map){
    if(key.length >5){
        console.log(key);

    }
}