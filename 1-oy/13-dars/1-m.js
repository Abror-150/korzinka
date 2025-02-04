let data = {
  user1: [
    {
      date: "09.11.2021",
      score: 45,
    },
    {
      date: "03.11.2021",
      score: 56,
    },

    {
      date: "06.11.2021",
      score: 40,
    },
    {
      date: "20.11.2021",
      score: 30,
    },
    {
        date: "20.11.2021",
        score: 30,
      }

  ],
  user2: [
    {
      date: "04.11.2021",
      score: 19,
    },

    {
      date: "23.11.2021",
      score: 10,
    },

    {
      date: "29.11.2021",
      score: 12,
    },
  ],
};

function calc (obj=[]) {

    let calls = []

    for(i in obj){
         let a = obj[i].reduce((acc,el) => (acc +el.score),0)/obj[i].lenght
        calls.push([{i:a}])
    }
    
}

console.log(data);