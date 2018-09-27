import { Player } from './player';
export class PlayersFactory{

    private players:Player[];

    constructor(){
        this.players = new Array<Player>();
    }

    public createPlayers():Array<Player>{

        this.players.push(new Player('Chet'));
        this.players.push(new Player('Pat'));
        this.players.push(new Player('Sue'));
        
        return this.players;
    }
}