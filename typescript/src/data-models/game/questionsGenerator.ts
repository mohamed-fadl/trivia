// this module generates questions for the game players.

import { GameBoard } from './gameBoard';

export class QuestionsGenerator {

    callsCount: Map<string, number>;

    constructor() {
        this.callsCount = new Map<string, number>();

        this.initialize();
    }

    private initialize() {
        this.callsCount.set('pop', 0);
        this.callsCount.set('science', 0);
        this.callsCount.set('rock', 0);
        this.callsCount.set('sports', 0);
    }

    generateQuestion(questionCategory): string {
        var result: string;

        this.callsCount.set(questionCategory, this.callsCount.get(questionCategory) + 1);


        result = this.formatQuestion(questionCategory, this.callsCount.get(questionCategory));
        return result;
    }

    private formatQuestion(category, callsCount): string {

        return `${category} Question ${callsCount}`;
    }
}