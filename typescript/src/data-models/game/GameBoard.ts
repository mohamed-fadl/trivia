/* this is a representation of the game board, it can have different shapes but
    for the current purpose of this game it reprepsents a one dimensional array of 12 element
    that looks like this

    *****************************************************************************************************************************
    *  0 pop * 1 science * 2 sports * 3 rock  * 4 pop * 5 science * 6 sports * 7 rock * 8 pop * 9 science * 10 sports * 11 rock *
    *****************************************************************************************************************************
 
*/

export class GameBoard {

    boardArray: Array<string>;
    callsCount: Map<string,number> // save number of calls for each category

    constructor() {
        this.boardArray = new Array<string>();
        this.callsCount = new Map<string,number>();
    }

    initalizeTheBoard() {
        this.boardArray = ['pop', 'science', 'sports', 'rock', 'pop', 'science', 'sports', 'rock', 'pop', 'science', 'sports', 'rock'];

        this.callsCount.set('pop', 0);
        this.callsCount.set('science', 0);
        this.callsCount.set('rock', 0);
        this.callsCount.set('sports', 0);

    }

    getCategory(index): string {

        var category = this.boardArray[index];
        this.updateCategoryCalls(category);

        return category;
    }

    private updateCategoryCalls(category) {
        this.callsCount.set(category, this.callsCount.get(category) + 1);
    }

    getCategoryCalls(category): number {
        return this.callsCount.get(category)
    }

    getPlayerNewPosition(index):numebr{
        if(index <= this.boardArray.length)
            return result;
        return (index - this.boardArray.length);
    }
}