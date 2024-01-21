import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../models/games';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  game?: Game;
  firestore: Firestore = inject(Firestore);
  constructor(private router: Router) { }



  async newGame() {
    this.game = new Game();
    await this.addGame(this.game, 'games');
    this.router.navigateByUrl('/game');
  };


  
  async addGame(item: Game, colId: string) {
    try {
      let gameData = item.toObject();
      await addDoc(collection(this.firestore, colId), gameData);
    } catch (error) {
      console.error(error)
    }
  }
}
