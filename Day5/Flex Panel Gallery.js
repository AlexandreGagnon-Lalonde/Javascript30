const sections = Array.from(document.querySelectorAll(".panel"));

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex") == true) {
    this.classList.toggle("active");
  }
}

sections.forEach(panel => panel.addEventListener("click", toggleOpen));
sections.forEach(panel => panel.addEventListener("transitionend", toggleActive));