export class Player {
    public name: string;
    public coins: number = 0;
    public isPenalized: boolean = false;
    public positionInTheGameBoard :number = 0;
    
    constructor(name: string) {
        this.name = name;

    }
}