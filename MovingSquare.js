'use strict';

const Game = {
  canvas: undefined,
  canvasContext: undefined,
  rectanglePosition: 0
};

Game.start = function() {
  Game.canvas = document.getElementById('myCanvas');
  Game.canvasContext = Game.canvas.getContext('2d');
  Game.mainLoop();
};
document.addEventListener('DOMContentLoaded', Game.start);

Game.update = function() {
  const d = new Date();
  Game.rectanglePosition = (d.getTime() % Game.canvas.width) + 50;
};

Game.draw = function() {
  Game.canvasContext.fillStyle = 'blue';
  Game.canvasContext.fillRect(Game.rectanglePosition, 100, 50, 50);
};

Game.clearCanvas = () => {
  Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.mainLoop = function() {
  Game.clearCanvas();
  Game.update();
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
};

console.log(Game);
