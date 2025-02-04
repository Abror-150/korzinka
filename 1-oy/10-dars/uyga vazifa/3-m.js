function capitalizeWords(text) {
    let words = text.split(" "); 
    let result = ""; 
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        if (i < words.length - 1) {
            result += " ";
        }
    }
    return result;
}
let inputText = "hello world salom dunyo";
let rez = capitalizeWords(inputText);
console.log(rez)