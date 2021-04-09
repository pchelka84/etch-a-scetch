const scetchGrid = document.querySelector('.scetch-container');
const changeSizeBtn = document.getElementById('change-size');
const clearBtn = document.getElementById('clear');

// Set grid 
function setGrid(size) {
 scetchGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

 for (let i = 0; i < size*size; i++) {
   const pixel = document.createElement('div');
   pixel.classList = 'pixel';

   // Change pixel color on hover
   pixel.addEventListener('mouseover', changePixelColor);
   scetchGrid.appendChild(pixel);
 }
}

// Change grid size
function changeGridSize(size) {

}

// Clear grid 
function clearGrid() {

}

// Change color randomly 
function changePixelColor(e) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  e.target.style.backgroundColor = `#${randomColor}`;

}

// Event listeners
changeSizeBtn.addEventListener('click', changeGridSize);
clearBtn.addEventListener('click', clearGrid);
setGrid(32);