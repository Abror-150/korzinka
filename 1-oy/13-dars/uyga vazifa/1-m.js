function register() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let email = prompt("Email kiriting:");
  let username = prompt("Username kiriting:");
  let parol = prompt("Parol kiriting:");

  let e = users.some(
    (user) => user.email === email || user.username === username
  );
  if (e) {
    alert(
      "Bu email yoki username allaqachon mavjud! Iltimos, boshqa birini tanlang."
    );
    return;
  }

  users.push({ email, username, parol });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi!");
}

function login() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let username = prompt("Username kiriting:");
  let parol = prompt("Parol kiriting:");

  let user = users.find(
    (user) => user.username === username && user.parol === parol
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert(`Xush kelibsiz, ${user.username}!`);
  } else {
    alert("Username yoki parol noto'g'ri!");
  }
}

function user() {
  let login = JSON.parse(localStorage.getItem("login"));

  if (login) {
    alert(`Foydalanuvchi ma'lumotlari:
        Email: ${login.email}
        Username: ${login.username}`);
  } else {
    alert("Tizimga kirmagansiz. Avval tizimga kiring!");
  }
}
