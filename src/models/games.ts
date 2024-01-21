export class Game{
    public currentPlayer: number = 0;
    public players: string[] =[];
    public stack: string[] = [];
    public playedCards: string[] = [];
    private kindOfCard:string[]=['ace_', 'hearts_', 'diamonds_', 'clubs_'];
    

    constructor(){
        this.kindOfCard.forEach(element => {
            for(let i =1; i<14; i++){
                this.stack.push(element + i.toString() + ".png");
            }
        });
        this.shuffleCards();
    };

    public shuffleCards(){
        for(let i = this.stack.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]];
        }
    };


    public toObject(){
        return {
            players: this.players,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            kindOfCard: this.kindOfCard
        }
    }
}