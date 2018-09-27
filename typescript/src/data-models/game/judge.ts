import { Player } from './../player';
import { Game } from './game'
// this module to judge a game state if it's finished with a winner or not 

export class Judge {

    constructor(private game: Game, private players: Array<Player>) {

    }
    checkGameForWinner(player: Player): boolean {

        if (player.coins == 6) {
            return true;
        }

        return false;
    }

    public startTheGame() {
        // this function implements the logic of how the game is played

        /*  
        circulate between players, roll the dice for each of them to know which questions
        category they should answer a question from. Ask the question and check if the answer
        is correct and reward or penalize the players according to that 
        */

        var i = 0;
        do {
            var currentPlayer = this.players[i];
            var positionShift = this.rollThePositionDice();

            // move the player x positions on the game board
            currentPlayer.positionInTheGameBoard = this.game.movePlayerInTheBoard(currentPlayer.positionInTheGameBoard
                + positionShift);
            // get question category
            var questionCategory = this.game.getPositionCategory(currentPlayer.positionInTheGameBoard);

            // get the question 
            var question = this.game.getQuestion(questionCategory);

            console.log('i = ', i);
            console.log(currentPlayer.name + ' is the current player.');
            console.log('they got this question:', question);

            var answer = this.rollTheAnswerDice();

            this.checkTheAnswer(currentPlayer, answer);

            if (this.checkForWinner(currentPlayer))
                i = -1
            else {
                if (i + 1 >= this.players.length)
                    i = 0;
                else
                    i++
            }

        } while (i != -1)

    }


    private rollThePositionDice(): number {
        return (Math.floor(Math.random() * 6) + 1)
    }

    private rollTheAnswerDice(): number {
        return (Math.floor(Math.random() * 10))
    }

    private checkTheAnswer(player: Player, answer: number) {
        if (answer != 7) {
            player.coins++;

        } else
            player.isPenalized = true;
    }

    private checkForWinner(player: Player): boolean {
        if (player.coins == 6)
            return true;
    }
}