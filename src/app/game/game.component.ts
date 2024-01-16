import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/games';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogClose,
    GameInfoComponent
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss', './flip-card-game.component.scss']
})
export class GameComponent {
  pickCardAnimation: boolean = false
  currentCard: string = "";
  game!: Game;


  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.newGame();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true
      document.getElementsByClassName('flip-card-inner')[0].classList.add('flip-animation');
      const poppedCard = this.game.stack.pop();
      if (typeof poppedCard === 'string') {
        this.currentCard = poppedCard;
        this.game.playedCards.push(poppedCard);
       this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length
      }
    }

    setTimeout(() => {
      this.pickCardAnimation = false
      document.getElementsByClassName('flip-card-inner')[0].classList.remove('flip-animation');
    }, 1500)
  }

  newGame() {
    this.game = new Game()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((result:string) => {
      this.game.players.push(result);
    });
  }
}
