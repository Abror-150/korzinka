let carmap = new Map([
    ["benzin",100],
    ["rasxod",6.5],
    ["km",0],
    function go(k=1){
        carmap.get("km") +=k
        let s = k*5
        carmap.get("benzin") -=s
    },
    function zaprafka(son){
        if(carmap.get("benzin")<=100){
            if(carmap.get("benzin") + son<=100){
                carmap.get("benzin") +=son

            }else{
                console.log("Bunday to'ldirib bo'maydi");
            }
        }else{
            console.log("Benzin allaqachon to'liq");
        }
    },
    function fullback(){
        console.log(`${100-carmap.get("benzin")} shuncha rasxod qilingan`);
        carmap.get("benzin") = 100

    }
]

)
let a= carmap.get(go())
a()
