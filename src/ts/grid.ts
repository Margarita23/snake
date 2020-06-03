import { Parametrs } from './parametrs';
import { Snake } from './snake';
import { Game } from './game';
import { Food } from './Food';
import { Block } from './block';
import { Vector } from './vector';
import { gameOver } from './gameOver';

export class Grid {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public totalHeight: number = document.getElementById('arena')!.offsetHeight;
    public totalWidth: number = document.getElementById('arena')!.offsetWidth;
    private gameSize: number = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
    private cellSize: number = this.gameSize / Parametrs.fieldWidth;
    private foodBugGreen: HTMLImageElement = document.getElementById('bug--green') as HTMLImageElement;
    private foodBugYellow: HTMLImageElement = document.getElementById('bug--yellow') as HTMLImageElement;
    private foodBugRed: HTMLImageElement = document.getElementById('bug--red') as HTMLImageElement;
    private foodMouse: HTMLImageElement = document.getElementById('mouse') as HTMLImageElement;
    private rocks: HTMLImageElement = document.getElementById('rocks') as HTMLImageElement;

    public game: Game;
    public snake: Snake;
    public food: Food;
    public animateTimer: any;
    public animateTimerShoter: any;

    constructor(game: Game) {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas.width = this.gameSize;
        this.canvas.height = this.gameSize;
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
        this.game = game;
        this.snake = game.snake;
        this.food = game.snake.myFood;
    };
    
    draw(){
        this.drawFence();
        this.drawFood();
        this.drawBlocks();
        this.drawFoodInStomach();        
    }

    drawFence() {
        this.ctx.fillStyle = "rgb(30, 200, 0)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        for(let i=0; i<Parametrs.fieldWidth; i++) {
            this.ctx.drawImage(this.rocks, 0, 0, 100, 90, 0, i*this.cellSize, this.cellSize, this.cellSize);
        }

        for(let i=0; i<Parametrs.fieldWidth; i++) {
            this.ctx.drawImage(this.rocks, 0, 0, 100, 90, i*this.cellSize, 0, this.cellSize, this.cellSize);
        }

        for(let i=0; i<Parametrs.fieldWidth; i++) {
            this.ctx.drawImage(this.rocks, 0, 0, 100, 90, (Parametrs.fieldWidth-1)*this.cellSize, i*this.cellSize, this.cellSize, this.cellSize);
        }

        for(let i=0; i<Parametrs.fieldWidth-1; i++) {
            this.ctx.drawImage(this.rocks, 0, 0, 100, 90, i*this.cellSize, (Parametrs.fieldWidth-1)*this.cellSize, this.cellSize, this.cellSize);
        }
    }

    resize(): any{
        this.totalHeight = document.getElementById('arena')!.offsetHeight;
        this.totalWidth = document.getElementById('arena')!.offsetWidth;
        this.gameSize = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
        this.canvas.width = this.gameSize;
        this.canvas.height = this.gameSize;
        this.cellSize = this.gameSize / Parametrs.fieldWidth;
        this.ctx.clearRect(0,0, document.getElementById('game')!.offsetWidth, document.getElementById('game')!.offsetHeight);
    }

    drawBlocks(){
        this.snake.blocks.forEach(block => {
            if(this.snake.blocks[0] === block){
                this.drawHeadSnake(block);
            }
            else{
                this.ctx.fillStyle = "rgb(200, 0, 0)";
                this.ctx.fillRect(block.x*this.cellSize, block.y*this.cellSize, this.cellSize, this.cellSize);
            }
        });
    }

    drawHeadSnake(block: Block){
        this.ctx.fillStyle = "rgb(200, 0, 0)";
        this.ctx.beginPath();
        let x = block.x*this.cellSize;
        let y = block.y*this.cellSize;
        this.ctx.moveTo(x,y);
        switch(this.snake.vector){
            case Vector.Up :
                this.ctx.lineTo(x + this.cellSize/2, y + this.cellSize/2);
                this.ctx.lineTo(x + this.cellSize, y);
                this.ctx.lineTo(x + this.cellSize, y + this.cellSize);
                this.ctx.lineTo(x, y + this.cellSize);
                break;
            case Vector.Right :
                this.ctx.lineTo(x + this.cellSize, y);
                this.ctx.lineTo(x + this.cellSize/2, y + this.cellSize/2);
                this.ctx.lineTo(x + this.cellSize, y + this.cellSize);
                this.ctx.lineTo(x, y + this.cellSize);
                break;
            case Vector.Down :
                this.ctx.lineTo(x + this.cellSize, y);
                this.ctx.lineTo(x + this.cellSize, y + this.cellSize);
                this.ctx.lineTo(x + this.cellSize/2, y + this.cellSize/2);
                this.ctx.lineTo(x, y + this.cellSize);
                break;
            case Vector.Left :
                this.ctx.lineTo(x + this.cellSize, y);
                this.ctx.lineTo(x + this.cellSize, y + this.cellSize);
                this.ctx.lineTo(x, y + this.cellSize);
                this.ctx.lineTo(x + this.cellSize/2, y + this.cellSize/2);
                break;
        }
        this.ctx.fill();
    }

    drawFoodInStomach(){
        this.snake.foodInStomach.forEach(block =>{
            this.ctx.fillStyle = "rgb(100, 0, 0)";
            this.ctx.beginPath();
            this.ctx.arc(block.x*this.cellSize + this.cellSize/2, block.y*this.cellSize + this.cellSize/2, this.cellSize/2,0,2 * Math.PI, false);
            this.ctx.fill();
        });
    }

    drawFood(){
        try{
            switch(this.food.type){
                case "bug--green" : this.ctx.drawImage(this.foodBugGreen, this.food.x*this.cellSize, this.food.y*this.cellSize, this.cellSize, this.cellSize); break;
                case "bug--yellow" : this.ctx.drawImage(this.foodBugYellow, this.food.x*this.cellSize, this.food.y*this.cellSize, this.cellSize, this.cellSize); break;
                case "bug--red" : this.ctx.drawImage(this.foodBugRed, this.food.x*this.cellSize, this.food.y*this.cellSize, this.cellSize, this.cellSize); break;
                case "mouse" : this.ctx.drawImage(this.foodMouse, this.food.x*this.cellSize, this.food.y*this.cellSize, this.cellSize, this.cellSize); break;
                default : this.ctx.drawImage(this.foodBugGreen, this.food.x*this.cellSize, this.food.y*this.cellSize, this.cellSize, this.cellSize); break;
            }
        } catch {
            this.ctx.fillStyle = "rgb(0, 100, 0)";
            this.ctx.beginPath();
            this.ctx.arc(this.food.x*this.cellSize + this.cellSize/2, this.food.y*this.cellSize + this.cellSize/2, this.cellSize/2,0,2 * Math.PI, false);
            this.ctx.fill();
        }
    }

    showGameOverModalWindow(): void {
        let _this = this;

        _this.animateTimer = setInterval(function (){
            _this.ctx.fillStyle = "rgb(50, 50, 50)";
            for (let i=0; i < gameOver.length; i++){
                _this.ctx.fillRect(_this.cellSize*gameOver[i][0], _this.cellSize*gameOver[i][1], _this.cellSize, _this.cellSize);
            }    
        }, 400);

        _this.animateTimerShoter = setInterval(function (){
            _this.ctx.fillStyle = "rgb(200, 200, 200)";
            for (let i=0; i < gameOver.length; i++){
                _this.ctx.fillRect(_this.cellSize*gameOver[i][0], _this.cellSize*gameOver[i][1], _this.cellSize, _this.cellSize);
            }    
        }, 800);
    }

    deleteGameOverModalWindow(): void {
        clearInterval(this.animateTimer);
        clearInterval(this.animateTimerShoter);
    }
}