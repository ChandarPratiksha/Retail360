const ADMIN_USER = import.meta.env.VITE_ADMIN_USER;
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS;

// LOGIN FUNCTION
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem("isAdminLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid admin credentials");
  }
}

// PAGE GUARD (runs on protected pages)
function checkAuth() {
  const isLoggedIn = localStorage.getItem("isAdminLoggedIn");

  if (!isLoggedIn) {
    window.location.href = "login.html";
  }
}

// LOGOUT (optional)
function logout() {
  localStorage.removeItem("isAdminLoggedIn");
  window.location.href = "login.html";
}
