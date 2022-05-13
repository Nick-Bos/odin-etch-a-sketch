const container = document.querySelector(".container");
//grid button function call
const gridBtn = document.querySelector(".grid-btn");
gridBtn.addEventListener("click", function () {
  const userInput = prompt("Enter number of grid-cells", "(1-100)");
  if (userInput > 100) {
    alert("Please input a number under 100");
    document.location.reload();
  } else;
  resetGrid();
  gridSize(userInput);
});

//reset grid function
function resetGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

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
    //clear button function
    const clearBtn = document.querySelector(".clear-btn");
    clearBtn.addEventListener("click", () => {
      clearGrid();
    });
    function clearGrid() {
      newDiv.style.backgroundColor = null;
    }
  }
}
