import { Parametrs } from './parametrs';
import { Snake } from './snake';
import { Game } from './game';
import { Food } from './Food';
import { Block } from './block';
import { Vector } from './vector';

export class Grid {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public totalHeight: number = document.getElementById('arena')!.offsetHeight;
    public totalWidth: number = document.getElementById('arena')!.offsetWidth;
    private gameSize: number = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
    private cellSize: number = this.gameSize / Parametrs.fieldWidth;
    private fieldFon: HTMLImageElement = new Image();

    public game: Game;
    public snake: Snake;
    public food: Food;

    constructor(game: Game) {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas.width = this.gameSize;
        this.canvas.height = this.gameSize;
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
        this.game = game;
        this.snake = game.snake;
        this.food = game.snake.myFood;
        this.fieldFon.src = require('../assets/carbon.jpg');
    };

    draw(){
        this.fon();
        this.drawFood();
        this.drawBlocks();
        this.drawFoodInStomach();
    }

    fon(){
        this.ctx.clearRect(0,0, this.totalWidth, this.totalHeight);
        this.ctx.strokeStyle = ("rgb(255,255,255)");
        this.ctx.lineWidth = 5;
        this.ctx.strokeRect(0, 0, this.gameSize, this.gameSize);
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
        this.ctx.fillStyle = "rgb(0, 100, 0)";
        this.ctx.beginPath();
        this.ctx.arc(this.food.x*this.cellSize + this.cellSize/2, this.food.y*this.cellSize + this.cellSize/2, this.cellSize/2,0,2 * Math.PI, false);
        this.ctx.fill();
    }
}