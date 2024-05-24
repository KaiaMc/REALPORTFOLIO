const nav = document.querySelector("nav");
const cardContainer = document.querySelector(".cardContainer");
let lastScrollY = cardContainer.scrollTop;

// Function to check window width
function checkWindowWidth() {
    return window.innerWidth < 900; // Change 768 to your desired threshold
}

// Function to handle scroll event
function handleScroll() {
    const navUl = document.querySelector("#navUl.show");

    // Check if navUl with .show class is present
    if (!navUl && !checkWindowWidth()) {
        // Proceed with scroll concealment enchantment only if navUl.show is not present
        if (lastScrollY < cardContainer.scrollTop) {
            nav.classList.add("nav--hidden");
        } else {
            nav.classList.remove("nav--hidden");
        }
    }

    lastScrollY = cardContainer.scrollTop;
}

// Add scroll event listener
cardContainer.addEventListener("scroll", handleScroll);

// Add resize event listener to handle window size changes
window.addEventListener("resize", () => {
    // Reevaluate scroll event listener based on window width
    if (checkWindowWidth()) {
        // Remove scroll event listener if window width is less than threshold
        cardContainer.removeEventListener("scroll", handleScroll);
    } else {
        // Add scroll event listener if window width is greater than or equal to threshold
        cardContainer.addEventListener("scroll", handleScroll);
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll("#skillsList > li");

    skillItems.forEach(item => {
        item.addEventListener("click", function() {
            const subSkills = item.querySelector(".subSkills");
            const allSubSkills = document.querySelectorAll(".subSkills");

            // Close 
            allSubSkills.forEach(skill => {
                skill.classList.remove("show");
            });

            // Show/hide 
            subSkills.classList.toggle("show");
            item.classList.toggle("show");
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    function toggleDropdown() {
        const dropdown = document.querySelector("#dropdown");
        const dropdownArrow = document.getElementById("dropdownArrow");

        dropdown.classList.toggle("show");
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
    

    if (screenWidth > 1277) { 
        // Hide small embeds and show large embeds
        smallEmbeds.forEach(function(embed) {
            embed.style.display = 'none';
        });
        largeEmbeds.forEach(function(embed) {
            embed.style.display = 'flex'; 
        });
    } else {
        // Show small embeds and hide large embeds
        smallEmbeds.forEach(function(embed) {
            embed.style.display = 'flex'; 
        });
        largeEmbeds.forEach(function(embed) {
            embed.style.display = 'none';
        });
    }
}

var loadingScreen = document.getElementById('loadingScreen');
// Automatically hide all albums except game design after a delay on page load
window.onload = function() {
    setTimeout(function() {
        // Hide portfolio sections
        showPortfolio('gamedesign-img');
        /* get rid of loading screen */
        loadingScreen.classList.toggle('done');
        // Call toggleVisibility to initially hide/show elements based on screen width
        toggleVisibility()
        // Add event listener for window resize to dynamically toggle visibility
        window.addEventListener('resize', toggleVisibility);
    }, 2000); // Adjust delay time as needed (in milliseconds)
};


document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.cardContainer').scrollTo({ top: 0, behavior: 'smooth' });
});

let loadingText = document.getElementById('loadingText');

let loadingTextOptions = [
    'downloading random files off google..',
    'please hold *elevator music*',
    'stuffs loading hang on a sec',
    'uhh oh jeez uhh um fiddlesticks',
    'so uh..come here often?',
    'content loading... or is it?',
    'hopefully everything is loading right...',
    'wait. keep waiting. a bit more.',
    'in life, its either load or be loaded',
    'eivät liiku. odota. hyvä.',
    'obtaining ip adress...',
    'behind you! AHH! behind you! AHH!',
    "get in the car loser we're loading",
]
    let selectedText = loadingTextOptions[(Math.floor(Math.random() * loadingTextOptions.length))];

    let activeText = document.createElement('p');
    activeText.textContent = selectedText;
    loadingText.innerHTML = '';

    loadingText.appendChild(activeText);
