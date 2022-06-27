const newsDropdownImage = document.querySelectorAll(".news-dropdown-img");
const newsDropdown = document.querySelectorAll(".news-dropdown");

const navDropdown = document.querySelector(".nav-dropdown");
const newsHamburger = document.querySelector(".news-hamburger");

newsDropdownImage.forEach(n => n.addEventListener("click", () => {
    n.classList.toggle("active");
    n.parentElement.parentElement.classList.toggle("active");
}));

newsHamburger.addEventListener("click", () => {
    newsHamburger.classList.toggle("active");
    navDropdown.classList.toggle("active");
});


