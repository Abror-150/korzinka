let user1 = {
    name:"Alex",
    year:1950,
    pensiyasi(){
        let age = 2025-this.year
        if(age>45){
            console.log(this.name,"Pensiyaga chiqgan");
        } else{
            console.log(this.name,"Pensiyaga chiqmagan");
        }
    }
} 
user1.pensiyasi()
let user2 = {
    name:"Bob",
    year: 1990,
    
}
user1.pensiyasi.call(user2)