/* this is a representation of the game board, it can have different shapes but
    for the current purpose of this game it reprepsents a one dimensional array of 12 element
    that looks like this

    *****************************************************************************************************************************
    *  0 pop * 1 science * 2 sports * 3 rock  * 4 pop * 5 science * 6 sports * 7 rock * 8 pop * 9 science * 10 sports * 11 rock *
    *****************************************************************************************************************************
 
*/

export class GameBoard {

    boardArray: Array<string>;

    constructor() {
        this.boardArray = new Array<string>();
    }

    initalizeTheBoard() {
        // for this current spicific game, the game board looks like one dimensional array of the categories.
        this.boardArray = ['pop', 'science', 'sports', 'rock', 'pop', 'science', 'sports', 'rock', 'pop', 'science', 'sports', 'rock'];

    }

    getCategory(index): string {
        return this.boardArray[index];
    }

    getPlayerNewPosition(index): number {
        if (index < this.boardArray.length)
            return index;
        else
            return (index - this.boardArray.length);
    }
}