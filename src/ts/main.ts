import { Game } from "./game";
require("../style/main.scss");

let game = new Game();
game.run();

let  refreshButton = document.getElementById('refreshGame');
refreshButton.onclick = function() {
    game = refreshGame(game);
}

function refreshGame(game: Game) {
    game.grid.deleteGameOverModalWindow();
    game.end();
    game.grid.deleteGameOverModalWindow();
    game = null;
    game = new Game();

    // game.grid.deleteGameOverModalWindow();
    game.run();
    return game;
}

window.onresize = function(){
    game.grid.resize();
    game.grid.draw();
};

let runButton = document.getElementById('runGame');
runButton.onclick = function(){
    if(!game.isEnd){
        game.run();
    }
}

document.addEventListener("keypress", function(event){
    switch(event.code){
        case '32' : game.pause(); break;
        case '13' : game.run(); break;
        case '27' : game = refreshGame(game); break;
        default : break;

    }
});

let pauseButton = document.getElementById('pauseGame');
pauseButton.onclick = function(){
    if(!game.isEnd){
        game.pause();
    }
}