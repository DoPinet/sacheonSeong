import {Block} from './Block'  
export class GameMap{          
    constructor(row = 2, col =3, blockCanRemove = 0){                  
        this.blockList = new Block[][];                  
        this.blockCanRemove = blockCanRemove;          
    }
}