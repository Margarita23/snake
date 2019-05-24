import { Block } from './block';
import { Parametrs } from './parametrs';

export class Food extends Block{
    constructor(x: number = -1, y: number = -1){
        super(x,y);
    }

    goOnField(): Food{
        let x = Math.floor(Math.random() * Parametrs.fieldWidth);
        let y = Math.floor(Math.random() * Parametrs.fieldWidth);
        this.x = x;
        this.y = y;
        return this;
    }
}