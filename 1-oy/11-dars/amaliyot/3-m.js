let products = [
    {name:"apple",price:34000,quantity:10,discount:13},
    {name:"banana",price:25000,quantity:6,discount:4},
    {name:"cherry",price:34000,quantity:12,discount:7},
    {name:"tarvuz",price:44000,quantity:71,discount:31},
]
let s = 0

function result(arr=[]){

    
    for(const i of arr){
       let rez =  i.price *i.quantity 
       s +=rez


    }
console.log(s);

}
result(products)