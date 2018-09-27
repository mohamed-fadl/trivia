import { GameBoard } from './GameBoard';
import { QuestionsGenerator } from './questionsGenerator';


export class Game {

    private board: GameBoard;
    private questionGenerator: QuestionsGenerator;

    constructor() {
        // the game creates its own board and question generator
        this.questionGenerator = new QuestionsGenerator();

        this.initialize();
    }

    private initialize() {
        this.board = new GameBoard();
        this.board.initalizeTheBoard();
    }

    public movePlayerInTheBoard(suggestedPosition): number {
        return this.board.getPlayerNewPosition(suggestedPosition);
    }

    public getPositionCategory(position): string {
        return this.board.getCategory(position);
    }
    public getQuestion(questionCategory): string {

        return this.questionGenerator.generateQuestion(questionCategory);
    }
}