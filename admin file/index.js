let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});

const dashboardOption = document.querySelector(".option1");
const articlesOption = document.querySelector(".option2");
const reportOption = document.querySelector(".option3");
const profileOption = document.querySelector(".option5");
const logoutOption = document.querySelector(".logout");
const dashboardContent = document.querySelector(".dashboard-content");
const articlesContent = document.querySelector(".articles-content");
const reportContent = document.querySelector(".report-content");
const profileContent = document.querySelector(".profile-content");

// Add click event listeners to menu options
dashboardOption.addEventListener("click", () => {
  hideAllContent();
  dashboardContent.style.display = "block";
});

articlesOption.addEventListener("click", () => {
  hideAllContent();
  articlesContent.style.display = "block";
});

reportOption.addEventListener("click", () => {
  hideAllContent();
  reportContent.style.display = "block";
});

profileOption.addEventListener("click", () => {
  hideAllContent();
  profileContent.style.display = "block";
});

logoutOption.addEventListener("click", () => {
  // Handle logout functionality here
  // For example, redirect the user to the logout page
  window.location.href = "logout.php";
});

// Function to hide all content sections
function hideAllContent() {
  dashboardContent.style.display = "none";
  articlesContent.style.display = "none";
  reportContent.style.display = "none";
  profileContent.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the profile option element
  const profileOption = document.getElementById("profileOption");

  // Add click event listener
  profileOption.addEventListener("click", function () {
    // Fetch the content of profile.php using AJAX
    fetch("profile.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        // Update the main container with the retrieved content
        document.querySelector(".main").innerHTML = data;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
});
