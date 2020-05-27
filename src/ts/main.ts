import { Game } from "./game";
require("../style/main.css");

let game = new Game();
game.run();

var  refreshButton = document.getElementById('refreshGame');
refreshButton.onclick = function() {
    game.end();
    game = null;
    game = new Game();
    game.run();
}

window.onresize= function(){
    game.grid.resize();
    game.grid.draw();
};

var runButton = document.getElementById('runGame');
runButton.onclick = function(){
    game.run();
}

var pauseButton = document.getElementById('pauseGame');
pauseButton.onclick = function(){
    game.pause();
}