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


const toggles = document.querySelectorAll('.accordion-toggle');
toggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    // The row that was clicked
    const row = btn.closest('.accordion-row');
    if (!row) return;

    // The row after it is the .accordion-content
    const contentRow = row.nextElementSibling;
    if (!contentRow || !contentRow.classList.contains('accordion-content')) return;

    // Close any currently open row
    document.querySelectorAll('.accordion-content.open').forEach((openRow) => {
      if (openRow !== contentRow) {
        openRow.classList.remove('open');
      }
    });

    // Toggle the clicked row
    contentRow.classList.toggle('open');
  });
});