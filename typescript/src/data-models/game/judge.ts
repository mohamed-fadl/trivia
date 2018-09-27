import { Player } from './../player';
import {Game} from './game'
// this module to judge a game state if it's finished with a winner or not 

export class Judge {

    constructor(private game:Game, private players:Array<Player>){
    }
    checkGameForWinner(player: Player): boolean {

        if (player.coins == 6) {
            return true;
        }

        return false;
    }

    public startTheGame(){
        // this function implements the logic of how the game is played
        
        /*  
        circulate between players, roll the dice for each of them to know which questions
        category they should answer a question from. Ask the question and check if the answer
        is correct and reward or penalize the players according to that 
        */

        var i = 0;
        do{
            var currentPlayer = this.players[i];
            var positionShift = this.rollTheDice();

            // move the player x positions on the game board
            currentPlayer.positionInTheGameBoard =  this.game.movePlayerInTheBoard(currentPlayer.positionInTheGameBoard 
                                                                                    + positionShift);
            
            // get the question 
            this.

        }while(i != -1)

    }


    private rollTheDice():number{
        return Math.floor(Math.random() * 6) + 1
    }
}