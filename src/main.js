document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".login-btn");
  const exploreBtn = document.querySelector(".explore-btn");

  loginBtn.addEventListener("click", function () {
    alert("Login feature coming soon!");
  });

  exploreBtn.addEventListener("click", function () {
    window.scrollTo({ top: document.querySelector(".popular").offsetTop, behavior: "smooth" });
  });
});
 
