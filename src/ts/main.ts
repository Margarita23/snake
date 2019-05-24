import { Game } from "./game";
require('file-loader?name=[name].[ext]!../index.html');

let game = new Game();
game.run();

var  startGameButton = document.getElementById('startGame');
startGameButton.onclick = function() {
    game.end();
}

window.onresize= function(){
    game.grid.resize();
    game.grid.draw();
};

var pauseButton = document.getElementById('pauseGame');
pauseButton.onclick = function(){
    alert("PAUSE");
}