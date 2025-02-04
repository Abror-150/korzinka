let user1 = 0;
let user2 = 0;
function oyin(status) {
  if (status) {
    let u1 = prompt("User1");
    let u2 = prompt("User2");
    if (
      (u1 == "tosh" && u2 == "qaychi") ||
      (u1 == "qaychi" && u2 == "qogoz") ||
      (u1 == "qogoz" && u2 == "tosh")
    ) {
      console.log("user 1 win");
      user1++;
      let tanlov = confirm("yes or no");
      oyin(tanlov);
    } else if (
      (u2 == "tosh" && u1 == "qaychi") ||
      (u2 == "qaychi" && u1 == "qogoz") ||
      (u2 == "qogoz" && u1 == "tosh")
    ) {
      console.log("user2 win");
      user2++;
      let tanlov = confirm("yes or no");
      oyin(tanlov);
    } else if (u1 == u2) {
      console.log("Tenglik");
      let tanlov = confirm("yes or no");
      oyin(tanlov);
    } else {
      alert("Xato qiymat kiritidingiz");
      let tanlov = confirm("yes or no");
      oyin(tanlov);
    }
  } else {
    console.log("end game");
    console.log(`User1,"${user1} point`);
    console.log(`User2,"${user2} point`);
    if (user1 > user2) {
      console.log("G'olib user1");
    } else if (user1 < user2) {
      console.log("Golib user2");
    } else {
      console.log("Durrang");
    }
  }
}
oyin(true);
