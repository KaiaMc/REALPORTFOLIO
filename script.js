const nav = document.querySelector("nav");
const cardContainer = document.querySelector(".cardContainer");
let lastScrollY = cardContainer.scrollTop;

cardContainer.addEventListener("scroll", () => {
    const navUl = document.querySelector("#navUl.show");
    
    // Check if navUl with .show class is present
    if (!navUl) {
        // Proceed with scroll concealment enchantment only if navUl.show is not present
        if (lastScrollY < cardContainer.scrollTop) {
            nav.classList.add("nav--hidden");
        } else {
            nav.classList.remove("nav--hidden");
        }
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

document.addEventListener("DOMContentLoaded", function() {
    // Initially hide all portfolio sections
    var portfolioSections = document.querySelectorAll('.portfolio-section');
    portfolioSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the "gamedesign-img" section
    var gamedesignSection = document.querySelector('.gamedesign-img');
    if (gamedesignSection) {
        gamedesignSection.style.display = 'flex';
    }

    // Add event listeners or any other initialization code here...
});

function toggleNav() {
    var navUl = document.getElementById('navUl');
    navUl.classList.toggle('show');
}

function toggleDropdown() {
    var dropdownUl = document.getElementsByClassName('dropdown-content')[0];
    dropdownUl.classList.toggle('show');
}

function showPortfolio(sectionId) {
    // Hide all portfolio sections
    var portfolioSections = document.querySelectorAll('.portfolio-section');
    portfolioSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected portfolio section
    var selectedSection = document.querySelector('.' + sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
    }
}
