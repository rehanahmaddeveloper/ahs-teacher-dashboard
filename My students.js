document.addEventListener("DOMContentLoaded", function () {
    // Toggle dropdown menu for profile
    const profileName = document.getElementById("profileDropdown");
    const dropdownMenu = document.getElementById("dropdownMenu");
  
    if (profileName && dropdownMenu) {
      profileName.addEventListener("click", function () {
        const isVisible = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isVisible ? "none" : "block";
        dropdownMenu.style.opacity = isVisible ? "0" : "1";
        dropdownMenu.style.visibility = isVisible ? "hidden" : "visible";
      });
  
      // Close dropdown if clicked outside
      document.addEventListener("click", function (e) {
        if (!profileName.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.style.display = "none";
          dropdownMenu.style.opacity = "0";
          dropdownMenu.style.visibility = "hidden";
        }
      });
    }
  });

// Function to toggle the accordion visibility
let lastOpenedAccordion = null;

function toggleAccordion(id) {
    const accordion = document.getElementById(id);

    // Close the previously opened accordion if it's not the one clicked
    if (lastOpenedAccordion && lastOpenedAccordion !== accordion) {
        lastOpenedAccordion.style.display = "none";
    }

    // Toggle the current accordion (open if it's closed, close if it's open)
    if (accordion.style.display === "block") {
        accordion.style.display = "none";
    } else {
        accordion.style.display = "block";
    }

    // Update last opened accordion
    lastOpenedAccordion = accordion;
}

// Ensure no accordion is opened when the page refreshes
window.onload = function() {
    const accordions = document.querySelectorAll('.accordion-content');
    accordions.forEach(accordion => {
        accordion.style.display = 'none';
    });
};

