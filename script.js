//enable hidden nav bar
const nav = document.querySelector("nav");
const cardContainer = document.querySelector(".cardContainer");
let lastScrollY = cardContainer.scrollTop;

cardContainer.addEventListener("scroll", () => {
    if (lastScrollY < cardContainer.scrollTop) {
        nav.classList.add("nav--hidden");
    } else {
        nav.classList.remove("nav--hidden");
    }
    lastScrollY = cardContainer.scrollTop;
});

document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll("#skillsList > li");

    skillItems.forEach(item => {
        item.addEventListener("click", function() {
            const subSkills = item.querySelector(".subSkills");
            const allSubSkills = document.querySelectorAll(".subSkills");

            // Close all subskills (unchanged)
            allSubSkills.forEach(skill => {
                skill.classList.remove("show");
            });

            // Show/hide clicked subskills (unchanged)
            subSkills.classList.toggle("show"); // Corrected typo: "shosw" to "show"

            // Add "show" class to both the clicked element and its subSkills
            item.classList.toggle("show");
        });
    });
});


