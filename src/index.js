const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav");

const dropdown = document.querySelectorAll(".dropdown");
const dropdownImage = document.querySelectorAll(".dropdown-img");
const dropdownContent = document.querySelector(".dropdown-content");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const moreProjects = document.querySelector(".projects-more");
const projectItem = document.querySelector(".project-item").getBoundingClientRect().width;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerNav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNav.classList.remove("active");
    dropdown.forEach(e => e.classList.remove("active"));
}));

dropdownImage.forEach(n => n.addEventListener("click", () => {
    n.classList.toggle("active");
    n.parentElement.parentElement.classList.toggle("active");
}));



leftArrow.addEventListener("click", () => {
    moreProjects.scrollLeft -= projectItem;
});

rightArrow.addEventListener("click", () => {
    moreProjects.scrollLeft += projectItem;
});