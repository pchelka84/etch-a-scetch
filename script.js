const scetchGrid = document.querySelector('.scetch-container');
const changeSizeBtn = document.getElementById('change-size');
const clearBtn = document.getElementById('clear');
const form = document.getElementById('form');
const messageBox = document.getElementById('message-box');
const input = document.getElementById('text');
const message = document.querySelector('.message');

// Set grid 
function setGrid(size) {
  // Clear grid first
  scetchGrid.innerHTML = ''; 

  // Set grid to equal width elements 
  scetchGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  // Create grid elements
  for (let i = 0; i < size*size; i++) {
   const pixel = document.createElement('div');
   pixel.classList = 'pixel';

   scetchGrid.appendChild(pixel);

   // Change pixel color on hover
   pixel.addEventListener('mouseover', changePixelColor);
  }
}

// Clear grid with the same pixel size
function clearGrid() { 
  const numberOfPixels = Math.sqrt(scetchGrid.childElementCount);
  setGrid(numberOfPixels);
}

// Open message/input box
function openMessageBox() {
  setTimeout(() => {
   messageBox.style.display = 'block';
  }, 40)
}

// Show error when user input incorrect
function showError() {
  message.innerHTML = "Please enter a number from 1 to 100!";
}

// Sumbit new size
function submitNewSize(e) {
  e.preventDefault();

  let size = parseInt(input.value);

  if (isNaN(size) || size < 1 || size > 100) {
    showError();
  } else { 
    size = parseInt(input.value); 
    
    message.innerHTML = "Enter a number from 1 to 100" 
    messageBox.style.display = 'none';

    setGrid(size);  
  } 
}

// Change grid size
function changeGridSize() { 
  openMessageBox();
}

// Change color randomly 
function changePixelColor(e) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  e.target.style.backgroundColor = `#${randomColor}`;
}

// Event listeners
changeSizeBtn.addEventListener('click', changeGridSize);
clearBtn.addEventListener('click', clearGrid);
form.addEventListener('submit', submitNewSize);
setGrid(32);