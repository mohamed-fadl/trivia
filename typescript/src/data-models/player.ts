export class Player {
    public name: string;
    public coins: number = 0;
    public isPenalized: boolean = false;

    constructor(name: string) {
        this.name = name;

    }
}