import { GameBoard } from './GameBoard';
import { QuestionsGenerator } from './questionsGenerator';


export class Game{

    private board:GameBoard;
    private questionGenerator:QuestionsGenerator;

    constructor(){
        // the game creates its own board and question generator
        this.board = new GameBoard();
        this.questionGenerator = new QuestionsGenerator(this.board);
    }

    private initialize(){
        this.board.initalizeTheBoard();
    }

    public movePlayerInTheBoard(suggestedPosition):number {
        return this.board.getPlayerNewPosition(suggestedPosition);
    }
}