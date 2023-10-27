const signup_btn = document.getElementById("signup_tab");
const login_btn = document.getElementById("login_tab");
const signup = document.getElementById("signup");
const login = document.getElementById("login");

login.style.display = "none";

signup_btn.addEventListener("click", () => {
  login.style.display = "none";
  signup.style.display = "block";
  signup_btn.style.background = "#f9fbfb";
  login_btn.style.background = "white";
});

login_btn.addEventListener("click", () => {
  signup.style.display = "none";
  login.style.display = "block";
  login_btn.style.background = "#f9fbfb";
  signup_btn.style.background = "white";
});
// #f9fbfb
