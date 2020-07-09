const boardDimension = 640;
const colorButtons = document.querySelectorAll('.color');
const board = document.querySelector('#flex-container');
color = 'black';
let uni = Math.floor (255*255*255*Math.random());
createGrid (16);

colorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let prevButton = document.querySelector('.selected');
        prevButton.classList.remove('selected');
        color = button.id;
        button.classList.add('selected');
    })
})

document.querySelector('#reset').addEventListener('click', (e) => {
    let cells = document.querySelectorAll ('#flex-container div');
    cells.forEach ((cell) => {
        cell.style.backgroundColor = 'white';
        cell.style.opacity = 1;
    });
})

document.querySelector('#change-size').addEventListener('click', (e) => {
    let size = document.querySelector('#bord-size');
    let squares = size.value;
    if (squares < 3) squares = 3;
    if (squares > 64) squares = 64;
    size.value = squares;
    createGrid (squares);
})

function createGrid (squares) {
    board.innerHTML = '';
    for (let y = 0; y < squares; y++) {
        for (let x = 0; x < squares; x++) {
            let innerDiv=document.createElement ('div');
            innerDiv.style.width = boardDimension/squares + 'px';
            innerDiv.style.height = boardDimension/squares + 'px';
            innerDiv.style.opacity = 1;
            innerDiv.addEventListener('mouseenter', draw);
            board.appendChild(innerDiv);
        }
    }
}

function draw () {
    switch (color) {
        case 'grayscale': 
            this.style.opacity = (+this.style.opacity - 0.1).toString();
            break;
        case 'unicorn':
            this.style.backgroundColor = `hsl(${uni}, 100%, 50%)`;
            uni++;
            break;
        case 'random':
            let rand = Math.floor (255*255*255*Math.random());
            this.style.backgroundColor = `hsl(${rand}, 100%, 50%)`;
            break;
        default: this.style.backgroundColor = color;

    }



}