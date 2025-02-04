let water_Arr = [4, 3, 7, 4, 9, 7, 5, 6, 8, 10, 6, 3]

let i = 0


let j = water_Arr.length -1


let s = j - i;

let m = 0

while(i<j){


    if(water_Arr[i] >= water_Arr[j]){
        if(m<water_Arr[j] * s){
             m = water_Arr[j] * s


         } 


        j--
    } else {
        if(m < water_Arr[i] * s){
            m = water_Arr[i] * s
        }
        i++
    }
        s = j - i
}

console.log(m);
