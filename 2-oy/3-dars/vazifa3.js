let f = require("fs");

let read = f.createReadStream("text.txt", {
  encoding: "utf-8",
  highWaterMark: 10,
});

let wrt = f.createWriteStream("write.txt");

// read.on("data", (chuk) =>{
//     wrt.write(chuk)
// })

read.pipe(wrt);
