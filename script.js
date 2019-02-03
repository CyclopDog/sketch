const canvas = document.getElementById('canvas');
const buttonClear = document.getElementById('button-clear');
const buttonResize = document.getElementById('button-resize');
const buttonArea = document.getElementById('button-area');

const gridArea = document.createElement('div');
const grid = document.createElement('div');

canvas.style = 'display: flex; width: 100%; justify-content: center';
gridArea.style = 'display: block; margin-top: 30px';
grid.style = 'display: flex; flex-wrap: wrap; height: 800px; width: 800px; border: 3px solid black';
buttonArea.style = 'display: flex; width: 100%; justify-content: center; margin: 0 0 20px 0';
buttonClear.style = 'margin: 0 10px; border: 2px solid #ededed; background-color: #ededed; padding: 15px; font-size: 24px; opacity: 0.7';
buttonResize.style = 'margin: 0 10px; border: 2px solid #ededed; background-color: #ededed; padding: 15px; font-size: 24px; opacity: 0.7';

gridArea.classList.add('grid-area');
grid.classList.add('grid');

canvas.appendChild(gridArea);
gridArea.appendChild(buttonArea);
gridArea.appendChild(grid);

const getLines = prompt('Enter the amount of lines (1 - 64)');

makeGridLines(getLines);

buttonClear.addEventListener('click', clearGrid);
buttonResize.addEventListener('click', gridResize);
buttonClear.addEventListener('mouseover', mouseOverButton);
buttonResize.addEventListener('mouseover', mouseOverButton)
buttonClear.addEventListener('mouseout', mouseOutButton)
buttonResize.addEventListener('mouseout', mouseOutButton)

function makeGridLines(lines) {
    const lineCount = lines*lines;
    const squareSize = (800/lines - 2);

    for (let index = 1; index <= lineCount; index++) {
        this["item"+index] = document.createElement('div');
        this["item"+index].classList.add('brush');
        this["item"+index].style = `border: 1px solid #d5d5d5; height: ${squareSize}px; width: ${squareSize}px; margin: 0`;
        grid.appendChild(this["item"+index]);
        this["item"+index].addEventListener('mouseover', paint);     
    }
}

function paint() {
    this.classList.add('painted');
}

function clearGrid() {
    const allPaintedBlocks = document.querySelectorAll('.painted');
    allPaintedBlocks.forEach(block => {
        block.classList.remove('painted');
    });
}

function gridResize() {
    const getLines = prompt('Enter the amount of lines (1 - 64)');
    var squareCount = grid.childElementCount;

    for (let index = 0; index < squareCount; index++) {
        grid.lastElementChild.remove('div');
    }
    
    makeGridLines(getLines);
}

function mouseOverButton() {
    this.style = 'margin: 0 10px; border: 2px solid #c0c0c0; background-color: #f6f6f6; padding: 15px; font-size: 24px; opacity: 1; cursor: pointer';
}

function mouseOutButton () {
    this.style = 'margin: 0 10px; border: 2px solid #ededed; background-color: #ededed; padding: 15px; font-size: 24px; opacity: 0.7';
}