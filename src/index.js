const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav");

const dropdown = document.querySelectorAll(".dropdown");
const dropdownImage = document.querySelectorAll(".dropdown-img");
const dropdownContent = document.querySelector(".dropdown-content");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerNav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNav.classList.remove("active");
}));

dropdownImage.forEach(n => n.addEventListener("click", () => {
    n.classList.toggle("active");
    n.parentElement.parentElement.classList.toggle("active");
}));

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    n.parentElement.parentElement.classList.remove("active");
}))

// if(dropdown.forEach(e => e.classList.contains("active"))){
//     document.querySelector("body").addEventListener("click", () => {
//         dropdown.forEach(e => e.classList.remove("active"));
//     })
// }


