import { Game } from './game';
import { PlayersFactory } from './data-models/players.factory';
import { Judge } from './data-models/game/judge';

export class GameRunner {
    public static main(): void {
        const game = new Game();
        game.add("Chet");
        game.add("Pat");
        game.add("Sue");

        let notAWinner;
        do {

            game.roll(Math.floor(Math.random() * 6) + 1);
        
            if (Math.floor(Math.random() * 10) == 7) {
            notAWinner = game.wrongAnswer();
            } else {
            notAWinner = game.wasCorrectlyAnswered();
            }
        
        } while (notAWinner);

        // the game runner starts by creating the players, the game, and the judge
        // the game runner then lets the judge manage the game and the players and decide
        // on the game resutl.

        // create list of players
        var playersFactory = new PlayersFactory();
        var players = playersFactory.createPlayers();

        // create the game
        var theGame = new Game();

        // create the judge
        var judge = new Judge();

        // time to play
        judge.startTheGame();
    }
}

GameRunner.main();

  