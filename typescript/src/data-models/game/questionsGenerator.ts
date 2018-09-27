// this module generates questions for the game players.

import { GameBoard } from './gameBoard';

export class QuestionsGenerator {

    private gameBoard: GameBoard;

    constructor(gameBoard) {
        this.gameBoard = gameBoard;
    }


    generateQuestion(playerPosition): string {
        var result: string;

        // check the category from the GameBoard
        var questionCategory = this.gameBoard.getCategory(playerPosition);
        var categoryCalls = this.gameBoard.getCategoryCalls(questionCategory);


        result = this.formatQuestion(questionCategory, categoryCalls);
        return result;
    }

    formatQuestion(category, callsCount): string {

        return `${category} Question ${callsCount}`;
    }
}