import { PlayersFactory } from './players.factory';
import {expect} from 'chai';
import {describe, it} from 'mocha';


describe('The Players Factory tests', () => {
    var playersNames = ['James','David'];

    it('should create an array of 3 players', () => {
        var players = PlayersFactory.createPlayers(playersNames);
        expect(players.length).to.equal(2);
    });

    it('first player name should be James', () => {
        var players = PlayersFactory.createPlayers(playersNames);
        expect(players[0].name).to.equal(playersNames[0]);
    });

    it('factory should throw error', () => {
        expect(PlayersFactory.createPlayers).to.throw(Error);
        
    });

});