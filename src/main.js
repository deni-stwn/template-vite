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
 const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');
  const auth = document.querySelector('.auth-buttons');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    auth.classList.toggle('active');
  });