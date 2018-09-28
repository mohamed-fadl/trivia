import { Game } from './data-models/game/game';
import { PlayersFactory } from './data-models/players.factory';
import { Judge } from './data-models/game/judge';

export class GameRunner {
    public static main(): void {

        // create list of players
        var playersFactory = new PlayersFactory();
        var players = playersFactory.createPlayers();
        
        // create the game
        var theGame = new Game();

        // create the judge
        var judge = new Judge(theGame, players);

        // time to play
        judge.startTheGame();
    }
}

GameRunner.main();

