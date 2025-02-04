const users = [
   { name: "Bonu", age: 56, gender: "woman" },
   { name: "niga", age: 67, gender: "man"},
   { name: "karl", age: 56, gender: "man" },
   { name: "aziza", age: 60, gender:"woman"},
   { name: "alex", age: 32, gender: "man" },
   { name: "Sitora", age: 22, gender: "woman" }

];

for(const user of users){
    if(user.age >45){
        if(user.gender =="man"){
            console.log(`${user.name} pensiyaga chiqgan`);
        }
    }
    
    if(user.age>55){
        if(user.gender == "woman"){
            console.log(`${user.name} pensiyaga chiqgan`);
        }
    }
   
   
}