import { Grid } from "./grid";
import { Snake } from './snake';

export class Game {
    public snake: Snake;
    public grid: Grid;
    public level: number = 500;
    public processTime: any;
    public changeLevel: number = -1;

    constructor(){
        this.snake = new Snake();
        this.grid = new Grid(this);
    }

    run(){
        this.level = 500;
        var _this = this;
        setTimeout(function request() {

        if(_this.snake.kill){
            _this.end();
            alert("Game OVER!");
        }
        else{
            _this.snake.putFoodOnField();
            _this.snake.move();
            _this.grid.draw();
            _this.showScore();
            if(_this.snake.blocks.length%10 === 0 && _this.changeLevel === -1){
                _this.changeLevel = _this.snake.blocks.length;
                _this.level = _this.level - 50;
            }
            if(_this.snake.blocks.length%10 != 0){
                _this.changeLevel = -1;
            }
        }
        setTimeout(request, _this.level);

    }, this.level);

        document.addEventListener('keydown',(event) => {
            if(event.keyCode === 38 || event.keyCode === 40 ||
                event.keyCode === 37 || event.keyCode === 39){
                    this.snake.vector = event.keyCode;
                }
        });
    }

    end(): void{
        this.grid = null;
        this.snake.kill = true;
        this.refresh();
    }

    refresh(){
        this.snake = new Snake();
        this.grid = new Grid(this);
    }

    showScore(){
        var score = document.getElementById('score');
        score.innerHTML = String(this.snake.blocks.length);
    }
}