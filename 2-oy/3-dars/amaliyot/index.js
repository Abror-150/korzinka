const Emitter = require("events")
let emitter = new Emitter()

emitter.on("budilnik", ()=>{
    setInterval(() => {
        let time = new Date()
        let minutes = time.getMinutes()
        let hours = time.getHours()
        if(hours ==17 && minutes == 49)
        console.log("Uygon qirol qirol uygon");
    })
        
    }, 1000);



emitter.emit("budilnik")