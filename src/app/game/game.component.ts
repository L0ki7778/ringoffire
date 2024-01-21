import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/games';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { SharedDataService } from '../shared-data.service';
import { Firestore, addDoc, collection, collectionData, doc, onSnapshot, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


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
  game?: Game;
  games: Array<object> = [];
  firestore: Firestore = inject(Firestore);
  item$:any;
  // items;

  // let item = onSnapshot(this.singleGameRef("games", params["id"]), (doc) => {
  //   console.log("hallo data",doc.data());
  // });


  constructor(private route:ActivatedRoute,public dialog: MatDialog, private sharedDataService: SharedDataService) {
    
    this.route.params.subscribe((params)=>{
      console.log(params["id"])
      let item = onSnapshot(this.singleGameRef("games", params["id"]), (doc) => {
        console.log("hallo data",doc.data());
        this.game = doc.data() as Game
        this.sharedDataService.updateGame(this.game)
      });
    })
  }

  ngOnDestroy() {
    // this.item$.unsubscribe();
  }


  takeCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true
      document.getElementsByClassName('flip-card-inner')[0].classList.add('flip-animation');
      if(this.game){
        const poppedCard = this.game.stack.pop();
        if (typeof poppedCard === 'string') {
          this.currentCard = poppedCard;
          this.game.playedCards.push(poppedCard);
          this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length
        }
      }
    }


    setTimeout(() => {
      this.pickCardAnimation = false
      document.getElementsByClassName('flip-card-inner')[0].classList.remove('flip-animation');
    }, 1600)
  }


  gameRef() {
    return collection(this.firestore, 'games');
  }


  singleGameRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result && result.length > 0 && this.game) {
        this.game.players.push(result);
        this.sharedDataService.updateGame(this.game)
      }
    });
  }
}
