const capital = (sentence)=>{
    return sentence.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1).join(' '))

}
console.log(capital("hello world, hello javascript"))



