const map = new Map()

map.set("name",'alex')
map.set("age",32)
map.set("location",'usa')

console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.get("location"));

map.delete("name")
console.log(map.has("name"));
console.log(map.size);

for(const[key,value] of map){
    console.log(`${key} ${value}`);
}