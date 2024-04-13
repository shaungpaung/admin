const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

// index.js
function showDashboard() {
  hideAll();
  document.getElementById("dashboard").classList.remove("hidden");
}

function showJobs() {
  hideAll();
  document.getElementById("jobs").classList.remove("hidden");
}

function showBranch() {
  hideAll();
  document.getElementById("branch").classList.remove("hidden");
}

function showVehicles() {
  hideAll();
  document.getElementById("vehicles").classList.remove("hidden");
}

function showUsers() {
  hideAll();
  document.getElementById("users").classList.remove("hidden");
}

function hideAll() {
  var sections = document.getElementsByClassName("main");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.add("hidden");
  }
}
