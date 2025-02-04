let arr1 = [];
function check() {
    for (let i = 0; i <= 9; i++) {
        arr1.push(i);
    }
    return arr1;
}

let rez = check();
let arr2 = [];

function toq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr.splice(i,1)
        }
    }
    return arr2;
}
toq(rez)
console.log(rez);

function update(arr){
    

}