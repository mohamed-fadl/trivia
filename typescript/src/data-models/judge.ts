import { Player } from './player';
import { Game } from './game/game';

// this module to judge a game state if it's finished with a winner or not 

export class Judge {

    private currentPlayer:Player;

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
            console.log('\n******************************** \n ');
            
            this.currentPlayer = this.players[i];
            var rollResult = this.rollThePositionDice();

            console.log(this.currentPlayer.name + ' is the current player.');
            console.log('they have rolled ', rollResult);
            
            if(this.currentPlayer.isPenalized){
                this.playForPenalizedPlayer(rollResult);
            }else{
                this.play(rollResult);
            }
            
            if (this.checkForWinner()){
                i = -1;
                console.log(`\nThe game ends, and the WINNER is ${this.currentPlayer.name.toUpperCase()}\n` );                
            }   
            else {
                if (i + 1 >= this.players.length)
                    i = 0;
                else
                    i++
            }

        } while (i != -1)

    }


    private playForPenalizedPlayer(rollResult){

        
        if(rollResult %2 != 0){
            this.currentPlayer.isPenalized = false;
            console.log(`${this.currentPlayer.name} is getting out of the penalty box`);

            this.play(rollResult);
        }else{
            console.log(`${this.currentPlayer.name} is NOT getting out of the penalty box`);
        }
    }

    private play(rollResult){

        // move the player x positions on the game board
        this.currentPlayer.positionInTheGameBoard = this.game.movePlayerInTheBoard(this.currentPlayer.positionInTheGameBoard
            + rollResult);

        console.log('their new position in the game is ', this.currentPlayer.positionInTheGameBoard);

        // get question category
        var questionCategory = this.game.getPositionCategory(this.currentPlayer.positionInTheGameBoard);
        
        console.log('the question category is ', questionCategory);

        // get the question 
        var question = this.game.getQuestion(questionCategory);

        console.log('they got this question:', question);

        var answer = this.rollTheAnswerDice();

        this.checkTheAnswer(this.currentPlayer, answer);
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
            console.log('answer was correct!!!');
            console.log(`${player.name} now has ${player.coins} gold coins.`);
            
        } else{
            player.isPenalized = true;
            console.log('answer was NOT correct!!!');
            console.log('the player has been sent to the penalty box');
        }
           
            
    }

    private checkForWinner(): boolean {
        if (this.currentPlayer.coins == 6)
            return true;
    }
}