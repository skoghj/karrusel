// Initially, show only Thursday elements
filterSelection("Thursday");

// Function to filter elements based on category
function filterSelection(category) {
  var elements, i;
  elements = document.getElementsByClassName("filterDiv");

  // Loop through all elements
  for (i = 0; i < elements.length; i++) {
    // Hide elements not matching the category
    if (elements[i].className.indexOf(category) === -1) {
      elements[i].style.display = "none";
    } else {
      // Show elements matching the category
      elements[i].style.display = "grid";
    }
  }
}

// Function to add a class to an element
function addClass(element, name) {
  var classes = element.className.split(" ");
  if (classes.indexOf(name) === -1) {
    element.className += " " + name;
  }
}

// Function to remove a class from an element
function removeClass(element, name) {
  var classes = element.className.split(" ");
  while (classes.indexOf(name) !== -1) {
    classes.splice(classes.indexOf(name), 1);
  }
  element.className = classes.join(" ");
}

// Add active class to the clicked button
var buttonContainer = document.getElementById("myBtnContainer");
var buttons = buttonContainer.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    // Filter elements based on the clicked button's category
    filterSelection(this.getAttribute("data-category"));
  });
}
