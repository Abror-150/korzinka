let users = [
    { name: "alex", year: 1990, work: 1, salary: 15000 },
    { name: "bob", year: 1995, work: 2, salary: 10000 },
    { name: "john", year: 2000, work: 10, salary: 4500 },
    { name: "konor", year: 1990, work: 10, salary: 1240 },
  ];

function check(arr=[]){
    for(let i of arr){
        let age = 2025 - i.year
        let balance = (i.work *12) * i.salary
        i.age = age
        i.balance = balance
        console.log(i);

    }

}
check(users)