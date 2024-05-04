/* on scroll down hide regular nav bar */

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
    // Define the toggleDropdown function within this event listener
    function toggleDropdown() {
        const dropdown = document.querySelector("#dropdown");
        const dropdownArrow = document.getElementById("dropdownArrow");

        // Toggle .show class on the dropdown synchronously
        dropdown.classList.toggle("show");

        // Toggle .rotate class on the dropdownArrow within the same synchronous block
        dropdownArrow.classList.toggle("rotate");
    }

    document.getElementById("dropdown").addEventListener("click", toggleDropdown);
});


function toggleNav() {
    var navUl = document.getElementById('navUl');
    navUl.classList.toggle('show');
}

function toggleDropdown() {
    var dropdownUl = document.getElementsByClassName('dropdown-content')[0];
    dropdownUl.classList.toggle('show');
}

// Function to hide all portfolio sections except the specified one
function showPortfolio(sectionId) {
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

// Function to toggle visibility of elements based on screen width
function toggleVisibility() {
    var screenWidth = window.innerWidth;
    var smallEmbeds = document.querySelectorAll('.embed-container-small');
    var largeEmbeds = document.querySelectorAll('.embed-container-large');
    
    if (screenWidth > 1277) { // Adjust the screen width threshold as needed
        // Hide small embeds and show large embeds
        smallEmbeds.forEach(function(embed) {
            embed.style.display = 'none';
        });
        largeEmbeds.forEach(function(embed) {
            embed.style.display = 'flex'; // Or 'block', or whatever fits your layout
        });
    } else {
        // Show small embeds and hide large embeds
        smallEmbeds.forEach(function(embed) {
            embed.style.display = 'flex'; // Or 'block', or whatever fits your layout
        });
        largeEmbeds.forEach(function(embed) {
            embed.style.display = 'none';
        });
    }
}

// Automatically hide all albums except game design after a delay on page load
window.onload = function() {
    setTimeout(function() {
        // Hide portfolio sections
        showPortfolio('gamedesign-img');

        // Call toggleVisibility to initially hide/show elements based on screen width
        toggleVisibility();

        // Add event listener for window resize to dynamically toggle visibility
        window.addEventListener('resize', toggleVisibility);
    }, 800); // Adjust delay time as needed (in milliseconds)
};
