function palindrome(str){
    let rez = str.split("").reverse().join("")

    if(rez==str){
        console.log(`${str} palindrom so'z`);
    }else{

    console.log(`${str} palindrom so'z emas`);
        
    }

}
palindrome("non")

