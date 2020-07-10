'use strict';
const boardDimension = 640;
const board = document.querySelector('#flex-container');
const colorButtons = document.querySelectorAll('.color');
const resetButton = document.querySelector('#reset');
const changeSizeButton = document.querySelector('#change-size');
let color = 'black';
let uni = Math.floor(256 * 256 * 256 * Math.random());
createGrid(16);

colorButtons.forEach((button) => {
  button.addEventListener('click', changeColor);
  button.addEventListener('mousedown', changeColor);
});

resetButton.addEventListener('click', resetBoard);
resetButton.addEventListener('mousedown', resetBoard);

changeSizeButton.addEventListener('click', changeSize);
changeSizeButton.addEventListener('mousedown', changeSize);

function changeColor() {
  let prevButton = document.querySelector('.selected');
  prevButton.classList.remove('selected');
  color = this.id;
  this.classList.add('selected');
}

function resetBoard() {
  let cells = document.querySelectorAll('#flex-container div');
  cells.forEach((cell) => {
    cell.style.backgroundColor = 'white';
    cell.style.opacity = 1;
  });
}

function changeSize() {
  let size = document.querySelector('#bord-size');
  let squares = size.value;
  if (squares < 3) squares = 3;
  if (squares > 64) squares = 64;
  size.value = squares;
  createGrid(squares);
}

function createGrid(squares) {
  board.innerHTML = '';
  for (let y = 0; y < squares; y++) {
    for (let x = 0; x < squares; x++) {
      let innerDiv = document.createElement('div');
      innerDiv.style.width = boardDimension / squares + 'px';
      innerDiv.style.height = boardDimension / squares + 'px';
      innerDiv.style.opacity = 1;
      innerDiv.addEventListener('mouseenter', draw);
      board.appendChild(innerDiv);
    }
  }
}

function draw() {
  switch (color) {
    case 'grayscale':
      this.style.opacity = (+this.style.opacity - 0.1).toString();
      break;
    case 'unicorn':
      this.style.backgroundColor = `hsl(${uni}, 100%, 50%)`;
      uni++;
      break;
    case 'random':
      let rand = Math.floor(256 * 256 * 256 * Math.random());
      this.style.backgroundColor = `hsl(${rand}, 100%, 50%)`;
      break;
    default:
      this.style.backgroundColor = color;
      this.style.opacity = 1;
  }

}