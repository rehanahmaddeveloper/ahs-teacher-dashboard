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






    // 1) Get references to the modal and the close button
    const dueDateModal = document.getElementById('dueDateModal');
    const closeBtn = document.querySelector('.calendar-close-btn');

    // 2) Attach event listeners to ALL "Due date" buttons
    document.querySelectorAll('.due-btn').forEach(button => {
      button.addEventListener('click', () => {
        // Show the calendar popup
        dueDateModal.style.display = 'block';
      });
    });

    // 3) Close button click => hide the popup
    closeBtn.addEventListener('click', () => {
      dueDateModal.style.display = 'none';
    });

    // 4) If user clicks outside the popup content, also close it
    window.addEventListener('click', (event) => {
      if (event.target === dueDateModal) {
        dueDateModal.style.display = 'none';
      }
    });


  // Open the modal
function openModal() {
  document.getElementById("studentModal").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("studentModal").style.display = "none";
}

// Toggle "Select All" checkbox
function toggleSelectAll() {
  const checkboxes = document.querySelectorAll(".student input[type='checkbox']");
  const selectAllCheckbox = document.getElementById("selectAll");
  checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
  });
}

// Save the selected students
function saveSelection() {
  const selectedStudents = [];
  const checkboxes = document.querySelectorAll(".student input[type='checkbox']:checked");
  checkboxes.forEach((checkbox) => {
      const studentName = checkbox.previousElementSibling.innerText;
      selectedStudents.push(studentName);
  });

  alert("Selected Students: " + selectedStudents.join(", "));
  closeModal();
}


function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}