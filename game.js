const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSizes;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSizes = window.innerWidth * 0.8;
  } else {
    canvasSizes = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSizes);
  canvas.setAttribute('height', canvasSizes);

  elementsSize = canvasSizes / 10;

  startGame();
}

function startGame() {
  console.log({canvasSizes, elementsSize});

  game.font = elementsSize + 'px Verdana';
  game.textAling = 'end';

  for (let i = 1; i <= 10; i++) {
    game.fillText(emojis['X'], elementsSize, elementsSize * i);
  }

}