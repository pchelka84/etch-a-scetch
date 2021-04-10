const scetchGrid = document.querySelector('.scetch-container');
const changeSizeBtn = document.getElementById('change-size');
const clearBtn = document.getElementById('clear');

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


// Change grid size
function changeGridSize() {
  let size = Number(window.prompt("Type a number between 1 and 100", "32 is a default size...")); 

  if (size < 1 || size > 100 || typeof size === NaN) {
    alert('Please enter a number between 1 and 100.')
    changeGridSize(); 
  } else {  
    setGrid(size); 
  }
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