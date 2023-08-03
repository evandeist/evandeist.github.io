let gridSize = 36; // Size of each square in the grid
let rows, cols;
let xOffset, yOffset;
let cells;
let didResize = false;
let touchActive = false;

const aliveVal = 0.5;
const thriveRate = 0.05;
const decayRate = 0.07;
const generationTime = 110;


function setup() {
  colorMode(RGB);
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(120);
  strokeWeight(0.5);
  frameRate(60);
  setInterval(updateCells, generationTime);
  initGrid();
}

function windowResized() {
  didResize = true;
}

function reset(){
  cells = [];
  cols = 0;
  rows = 0;
  resizeCanvas(windowWidth, windowHeight);
  initGrid();
}

function draw() {
  if (cells != []){
    cellPen();
    drawGrid();
  }
  if (didResize){
    reset();
    didResize = false;
  }
}

function mouseCellX(){
  return Math.floor((mouseX -xOffset) / gridSize); 
}

function mouseCellY(){
  return Math.floor((mouseY - yOffset) / gridSize); 
}

function cellPen(){
  let x = mouseCellX();
  let y = mouseCellY();
  if (x >= 0 && x < cols && y >=0 && y < rows){
    spawnCell(x, y);
  }
}

function spawnCell(x, y){
  if (!(cells[x][y] === undefined)){
    cells[x][y] = aliveVal;
  }
}

function getCellColor(val){
  const deadColor = color(30, 25, 60);
  const aliveColor = color(100, 100, 120);
  return lerpColor(deadColor, aliveColor, val);
}

function initGrid() {
  // Calculate the number of rows and columns based on window size
  cols = Math.floor(width / gridSize) + 2;
  rows = Math.floor(height / gridSize) + 2;
  
  cells = [...Array(cols)].map(e => Array(rows).fill(0.0));
  
  // test walker
  /*
  cells[20][20] = 1.0;
  cells[21][20] = 1.0;
  cells[22][20] = 1.0;
  cells[20][21] = 1.0;
  cells[21][22] = 1.0;
  */

  // Calculate the offset to center the grid
  xOffset = (width - cols * gridSize) / 2;
  yOffset = (height - rows * gridSize) / 2;

  // Draw the grid
  drawGrid();
}

function updateCells() {
  
  let newCells = [...Array(cols)].map(e => Array(rows).fill(0.0));
  
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let n = getNeighbors(x, y);
      if (isAlive(x, y)) {
        if (n == 2 || n == 3){ // stay alive
          newCells[x][y] = cells[x][y] + thriveRate;
        } else { // die
          newCells[x][y] = aliveVal - decayRate;
        }
      } else {
        if (n == 3){ // born
          newCells[x][y] = aliveVal;
        } else { // stay dead
          newCells[x][y] = cells[x][y] - decayRate;
        }
      }
    }
  }
  
  cells = newCells;
}

function getNeighbors(x, y){
  let n = 0;
  if (isAlive(x-1, y-1)) n++;
  if (isAlive(x,   y-1)) n++;
  if (isAlive(x+1, y-1)) n++;
  if (isAlive(x-1, y  )) n++;
  if (isAlive(x+1, y  )) n++;
  if (isAlive(x-1, y+1)) n++;
  if (isAlive(x,   y+1)) n++;
  if (isAlive(x+1, y+1)) n++;
  return n;
}

function isAlive(x, y){
  if (x >= 0 && x < cols && y >=0 && y < rows){
    return (cells[x][y] >= aliveVal);
  } else {
    return false;
  }
}

function drawCell(x, y, col){
  let posX = xOffset + x * gridSize;
  let posY = yOffset + y * gridSize;
  fill(col);
  rect(posX, posY, gridSize, gridSize);
}

function drawGrid(){
  // Draw the grid
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      drawCell(x, y, getCellColor(cells[x][y]));
    }
  }
}