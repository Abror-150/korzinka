function register() {
 let users  = JSON.parse(localStorage.getItem("users")) || []

  let email = prompt("emailn kiriting");
  let username = prompt("username  kiriting");
  let parol = prompt("paroln kiriting");

 let b = users.some((users)=> users.email == users.email || users.username == users.username)

  if (b) {
    alert("Bu email allaqachon bor, iltimos boshqa emailni kiriting");
    return;
  }

  users.push(email, username, parol);
  localStorage.setItem(JSON.stringify(users));

  alert("foydalanucvchi royhatdan otdi ");
}

function login() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let username = prompt("usernami kiriting");
  let parol = prompt("usernami kiriting");

  let user = users.find(
    (user) => user.username == username && user.parol == username
  );
  if (user) {
    localStorage.setItem(JSON.stringify("loggin", user));

    alert(`xush kelibsiz ${user.username}`);
  } else {
    alert("Username yoki parol xato");
  }
}

function user() {
  let login = JSON.parse(localStorage.getItem("login"));

  if (login) {
    alert(
      `Foydalanuvchi ma'lumotlari email: ${login.email} username: ${login.username}`
    );
  }

  alert("iltimos ro'yhatdan o'tding");
}
