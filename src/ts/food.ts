import { Block } from './block';
import { Parametrs } from './parametrs';
import { FoodType } from './foodType';

export class Food extends Block{
    public type: string;

    constructor(x: number = -1, y: number = -1){
        super(x,y);
    }
    
    goOnField(): Food{
        let x = Math.floor(Math.random() * (Parametrs.fieldWidth - 2)) + 1;
        let y = Math.floor(Math.random() * (Parametrs.fieldWidth - 2)) + 1;
        this.x = x;
        this.y = y;
        this.type = this.setTypeFood();
        return this;
    }

    setTypeFood(): string {
        let foodCountsType = Object.keys(FoodType).length;
        let typeNumber = Math.floor(Math.random() * foodCountsType);
        let type = "";
        switch(typeNumber) {
            case 0 : type = FoodType.BugGreen; break;
            case 1 : type = FoodType.BugYellow; break;
            case 2 : type = FoodType.BugRed; break;
            case 3 : type = FoodType.Mouse; break;
            default : type = FoodType.BugGreen; break;
        }
        return type;
    }
}