import { Player } from '../data-models/player';
export class PlayersFactory{

    private static players:Player[];

    public static createPlayers():Array<Player>{
        this.players = new Array<Player>();

        this.players.push(new Player('Chet'));
        this.players.push(new Player('Pat'));
        this.players.push(new Player('Sue'));
        
        return this.players;
    }
}