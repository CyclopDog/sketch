const canvas = document.getElementById('canvas');

const gridArea = document.createElement('div');
const grid = document.createElement('div');

canvas.style = 'display: flex; width: 100%; justify-content: center';
gridArea.style = 'display: block; margin-top: 140px';
grid.style = 'height: 805px; width: 805px; border: 3px solid black';

gridArea.classList.add('grid-area');
grid.classList.add('grid');

canvas.appendChild(gridArea);
gridArea.appendChild(grid);