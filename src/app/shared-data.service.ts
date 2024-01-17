import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Game} from './../models/games';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private gameSource = new BehaviorSubject<Game | null>(null);
  currentGame = this.gameSource.asObservable();

  updateGame(game: Game): void {
    this.gameSource.next(game);
  }

}
