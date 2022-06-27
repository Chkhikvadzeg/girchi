const projectsLeft = document.querySelector(".projects-left");
const projectsRight = document.querySelector(".projects-right");
const projectsPage = document.querySelectorAll(".projects-page");

projectsPage.forEach(n => n.addEventListener("click", () => {
    projectsPage.forEach(e => e.classList.remove("active"));
    n.classList.add("active");
}));