import { Game } from './data-models/game/game';
import { Judge } from './data-models/judge';
import { PlayersFactory } from './factories/players.factory';

export class GameRunner {
    public static main(): void {

        var playersNames = ['Chat','Pat','Sue'];
        // create list of players
        var players = PlayersFactory.createPlayers(playersNames);
        
        // create the game
        var theGame = new Game();

        // create the judge
        var judge = new Judge(theGame, players);

        // time to play
        judge.startTheGame();
    }
}

GameRunner.main();

