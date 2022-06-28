const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const moreProjects = document.querySelector(".projects-more");
const projectItem = document.querySelector(".project-item").getBoundingClientRect().width += 20;

leftArrow.addEventListener("click", () => {
    moreProjects.scrollLeft -= projectItem;
});

rightArrow.addEventListener("click", () => {
    moreProjects.scrollLeft += projectItem;
});
