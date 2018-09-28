import { Player } from '../data-models/player';
export class PlayersFactory{

    private static players:Player[];

    public static createPlayers(names:Array<string>):Array<Player>{
        this.players = new Array<Player>();

        if(names.length == 0)
            throw new Error('no names provided'); 
        
        names.forEach(name => {
            this.players.push(new Player(name));            
        });
        
        return this.players;
    }
}