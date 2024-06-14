export class Game{
     currentPlayer: number = 0;
     players: string[] =[];
     stack: string[] = [];
     playedCards: string[] = [];
     kindOfCard:string[]=['ace_', 'hearts_', 'diamonds_', 'clubs_'];
     id: string = "";
     pickCardAnimation: boolean = false
     currentCard: string = "";
    

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
            kindOfCard: this.kindOfCard,
            id: this.id,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard

        }
    }
}