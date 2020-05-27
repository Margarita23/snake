import { Block } from './block';
import { Vector } from './vector';
import { Parametrs } from './parametrs';
import { Food } from './Food';
import { Sound } from './sound';

export class Snake{
    public blocks: Block[];
    public vector: Vector = Vector.Up;
    public myFood: Food = new Food(-1, -1);
    public foodInStomach: Block[] = [];
    public kill: boolean = false;
    public sound: Sound = new Sound();

    constructor(){
        this.blocks = [];
        this.blocks.push(new Block(10,20));
        this.kill = false;
    }

    move(): void{
        if(this.canSnakeGo()){
            this.eat();
            this.moveBody(this.blocks[0]);
            switch(this.vector){
                case Vector.Up:
                    this.blocks[0].y = this.blocks[0].y - 1;
                    break;
                case Vector.Right:
                    this.blocks[0].x = this.blocks[0].x + 1;
                    break;
                case Vector.Down:
                    this.blocks[0].y = this.blocks[0].y + 1;
                    break;
                case Vector.Left:
                    this.blocks[0].x = this.blocks[0].x - 1;
                    break;
                default : ;
            }
        }else{
            this.kill = true;
        }
    }

    putFoodOnField(): void{
        if(this.myFood.x == -1 && this.myFood.y == -1){
            this.myFood = this.myFood.goOnField();
        }
    }

    private moveBody(head: Block){
        for(var i=this.blocks.length-1; i>0; i--){
            this.blocks[i].x = this.blocks[i-1].x;
            this.blocks[i].y = this.blocks[i-1].y;
        }
    }

    private eat(): void{
        let lastBlock = this.blocks[this.blocks.length - 1];
        if(this.blocks[0].x == this.myFood.x && this.blocks[0].y == this.myFood.y){
            this.foodInStomach.push(new Block(this.myFood.x, this.myFood.y));
            this.myFood.x = -1;
            this.myFood.y = -1;
            this.sound.run("eating");
        }
        this.foodInStomach.forEach((block, index) =>{
            if(block.x == lastBlock.x && block.y == lastBlock.y){
                this.blocks.push(new Block(block.x, block.y));
                this.foodInStomach.splice(index, 1);
            }
        });
    }

    private canSnakeGo(): boolean{
        let isCanGo = true;
        let block = this.blocks[0];
        if(block.x < 1 ||
            block.x >= Parametrs.fieldWidth ||
            block.y < 1 ||
            block.y >= Parametrs.fieldWidth ||
            this.headHitTheBody())
            {
                isCanGo = false;
            }
        return isCanGo;
    }

    private headHitTheBody(): boolean{
        let isHit = false;
        for(let i=1;i<this.blocks.length;i++){
            if(this.blocks[0].x === this.blocks[i].x &&
                this.blocks[0].y === this.blocks[i].y){
                    isHit = true;
                }
        }
        return isHit;
    }
}