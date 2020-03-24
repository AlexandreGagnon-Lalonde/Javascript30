// returns the root element of the page
const root = document.documentElement
// 
const inputs = [].slice.call(document.querySelectorAll("input"));

function propertyUpdate() {
    // if the property color changes, modify --base variable
    if (this.type === "color") {
    root.style.setProperty("--base", this.value);
    // if the property range and id blur changes, modify --blur variable
    } else if (this.type === "range" && this.id === "blur") {
    root.style.setProperty("--blur", this.value + "px");
    // if the property range and id spacing changes, modify --spacing variable
    } else if (this.type === "range" && this.id === "spacing") {
    root.style.setProperty("--spacing", this.value + "px");
    }
}

// activate the changes depending on type of property
inputs.forEach(input => input.addEventListener("change", propertyUpdate));
inputs.forEach(input => input.addEventListener("mousemove", propertyUpdate));