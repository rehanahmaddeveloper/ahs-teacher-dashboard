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
    }
});
      // Close dropdown if clicked outside
