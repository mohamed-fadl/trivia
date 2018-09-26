import { Player } from './../player';
// this module to judge a game state if it's finished with a winner or not 

export class Judge {

    checkGameForWinner(player: Player): boolean {

        if (player.coins == 6) {
            return true;
        }

        return false;
    }
}