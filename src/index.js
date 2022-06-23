const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerNav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNav.classList.remove("active");
}))

