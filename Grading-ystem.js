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
  
    // Sidebar toggle for mobile
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
  
    if (hamburgerMenu && sidebar) {
      hamburgerMenu.addEventListener('click', function () {
        sidebar.classList.toggle('open');
      });
    }
  });