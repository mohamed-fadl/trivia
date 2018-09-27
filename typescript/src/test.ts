import { QuestionsGenerator } from './data-models/game/questionsGenerator';
import { GameBoard } from './data-models/game/gameBoard';


export class Test {
    public static main(): void {

        var board = new GameBoard();
        board.initalizeTheBoard();


        var generator = new QuestionsGenerator(board);

        console.log(generator.generateQuestion(0));
    }
}

Test.main();

