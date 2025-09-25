document.addEventListener("DOMContentLoaded", function () {
  
  // ========== ADD TEACHER POPUP ==========  
  const openTeacherModalBtn = document.getElementById("openTeacherModalBtn");
  const teacherPopupOverlay = document.getElementById("teacherPopupOverlay");
  const closeTeacherPopup = document.getElementById("closeTeacherPopup");

  // Open the "Add Teacher" popup when button is clicked
  if (openTeacherModalBtn) {
    openTeacherModalBtn.addEventListener("click", function () {
      teacherPopupOverlay.style.display = "flex"; // Show the popup when the button is clicked
    });
  }

  // Close the popup when the close button inside the popup is clicked
  if (closeTeacherPopup) {
    closeTeacherPopup.addEventListener("click", function () {
      teacherPopupOverlay.style.display = "none"; // Hide the popup when close button is clicked
    });
  }

  // Close the popup when the overlay (outside of the content area) is clicked
  if (teacherPopupOverlay) {
    teacherPopupOverlay.addEventListener("click", function (e) {
      if (e.target === teacherPopupOverlay) {
        teacherPopupOverlay.style.display = "none"; // Close popup if overlay is clicked
      }
    });
  }

  // ========== USER ANALYTICS TOGGLE ==========  
  const userAnalyticsLink = document.getElementById("userAnalyticsLink");
  const myDashboardLink = document.getElementById("myDashboardLink");
  const mainContent = document.getElementById("mainContent");
  const analyticsContent = document.getElementById("analyticsContent");
  const sidebar = document.getElementById("sidebar");          // OLD SIDEBAR
  const mainContainer = document.getElementById("mainContainer");

  // Show analytics, hide main dashboard
  if (userAnalyticsLink) {
    userAnalyticsLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (mainContent) mainContent.style.display = "none";       // Hide main dashboard
      if (analyticsContent) analyticsContent.style.display = "block"; // Show analytics
      if (sidebar) sidebar.style.display = "none";               // Hide old sidebar
      if (mainContainer) mainContainer.classList.add("user-analytics-active");
    });
  }

  // Go back to dashboard, hide analytics
  if (myDashboardLink) {
    myDashboardLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (analyticsContent) analyticsContent.style.display = "none"; // Hide analytics
      if (mainContent) mainContent.style.display = "block";          // Show dashboard

      // Show old sidebar
      if (sidebar) sidebar.style.display = "block";

      if (mainContainer) mainContainer.classList.remove("user-analytics-active");
    });
  }

  // ========== Profile Dropdown Menu ==========  
  const profileName = document.getElementById("profileDropdown");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (profileName && dropdownMenu) {
    // Toggle dropdown menu on click
    profileName.addEventListener("click", function () {
      const isVisible = dropdownMenu.style.display === "block";
      dropdownMenu.style.display = isVisible ? "none" : "block";
      dropdownMenu.style.opacity = isVisible ? "0" : "1";
      dropdownMenu.style.visibility = isVisible ? "hidden" : "visible";
    });

    // Close the dropdown if clicked outside
    document.addEventListener("click", function (e) {
      if (!profileName.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.visibility = "hidden";
      }
    });
  }

  // ========== HOME BUTTON FUNCTIONALITY ========== 
  const homeBtn = document.getElementById("homeBtn");
  if (homeBtn) {
    homeBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Hide analytics
      if (analyticsContent) analyticsContent.style.display = "none";

      // Show main dashboard
      if (mainContent) mainContent.style.display = "block";

      // Show old sidebar
      if (sidebar) sidebar.style.display = "block";

      if (mainContainer) mainContainer.classList.remove("user-analytics-active");
    });
  }

  // ========== TOGGLE 'ACTIVE' CLASS FOR BUTTONS ==========  
  document.querySelectorAll('.header-btn').forEach(button => {
    button.addEventListener('click', function () {
      document.querySelectorAll('.header-btn').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // To ensure that the "Add Teacher" popup opens after refresh
  // If we are on the home/dashboard, clicking "Add Teacher" should work as intended
  const openTeacherModalBtnAfterRefresh = document.getElementById("openTeacherModalBtn");
  if (openTeacherModalBtnAfterRefresh) {
    openTeacherModalBtnAfterRefresh.addEventListener("click", function () {
      teacherPopupOverlay.style.display = "flex"; // Open popup
    });
  }

});





