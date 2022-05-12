const container = document.querySelector(".container");
//user input prompt box
const userInput = prompt("Enter number of grid-cells", "(1-100)");
if (userInput > 100) {
  alert("Please input a number under 100");
  document.location.reload();
} else;

//function grid size change
function gridSize(value) {
  container.style.gridTemplateColumns = `repeat(${value}, auto)`;
  container.style.gridTemplateRows = `repeat(${value}, auto)`;

  for (let i = 0; i < value ** 2; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.className = "childDiv";

    //hover-trail
    newDiv.addEventListener("mouseover", hoverOn);
    newDiv.addEventListener("mouseover", hoverOff);
    function hoverOn() {
      newDiv.style.backgroundColor = "black";
    }
    function hoverOff() {
      newDiv.style.backgroundColor = "black";
    }
  }
}
gridSize(userInput);
