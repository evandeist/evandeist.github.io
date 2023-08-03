let gridSize = 45; // Size of each square in the grid
let rows, cols;
let xOffset, yOffset;
let cells;
let cellVals;

const aliveVal = 1;
const thriveRate = 0.02;
const decayRate = 0.13;
const generationTime = 300;

function setup() {
  colorMode(RGB);
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(180);
  setInterval(updateCells, generationTime);
  initGrid();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initGrid();
}

function draw() {
  cellPen();
  fadeCells();
  drawGrid();
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
  spawnCell(x, y);
  //spawnCell(x-1, y);
  //spawnCell(x+1, y);
  //spawnCell(x, y-1);
  //spawnCell(x, y+1);
}

function spawnCell(x, y){
  if (x >= 0 && x < cols && y >=0 && y < rows){
      cells[x][y] = 1;
      cellVals[x][y] = 0.9;
  }
}

function getCellColor(val){
  const deadColor = color(20, 20, 60);
  const aliveColor = color(140, 160, 180);
  return lerpColor(deadColor, aliveColor, val);
}

function initGrid() {
  // Calculate the number of rows and columns based on window size
  cols = Math.floor(width / gridSize) + 2;
  rows = Math.floor(height / gridSize) + 2;
  
  cells = [...Array(cols)].map(e => Array(rows).fill(0));
  cellVals = [...Array(cols)].map(e => Array(rows).fill(0));
  
  // test walker
  /*
  cells[20][20] = 1;
  cells[21][20] = 1;
  cells[22][20] = 1;
  cells[20][21] = 1;
  cells[21][22] = 1;
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
          newCells[x][y] = 1;
        } else { // die
          newCells[x][y] = 0;
          //cellVals[x][y] = 0.5;
        }
      } else {
        if (n == 3){ // born
          newCells[x][y] = 1;
          //cellVals[x][y] = 0.5;
        } else { // stay dead
          newCells[x][y] = 0;
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

function fadeCells(){
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (isAlive(x, y)){
        if (cellVals[x][y] < 0.3){
          cellVals[x][y] = 0.3;
        }
        cellVals[x][y] += thriveRate;
      } else {
        cellVals[x][y] -= decayRate;
      }
      constrain(cellVals[x][y], 0.0, 1.0);
    }
  }
}

function drawCell(x, y, col){
  let posX = xOffset + x * gridSize;
  let posY = yOffset + y * gridSize;
  fill(col);
  stroke(190);
  strokeWeight(0.3);
  rect(posX, posY, gridSize, gridSize, 1);
}

function drawGrid(){
  // Draw the grid
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      drawCell(x, y, getCellColor(cellVals[x][y]));
    }
  }
}