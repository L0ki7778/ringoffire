import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {

  cardAction: { title: string; description: string; }[] = [
    { title: "Waterfall", description: "Everyone starts drinking, and you can't stop until the person to your right stops. The person who drew the Ace starts the waterfall." },
    { title: "You", description: "Choose someone to take a drink." },
    { title: "Me", description: "You take a drink." },
    { title: "Floor", description: "Everyone races to touch the floor, last one drinks." },
    { title: "Guys", description: "All guys take a drink." },
    { title: "Chicks", description: "All ladies take a drink." },
    { title: "Heaven", description: "Everyone points to the sky, last one drinks." },
    { title: "Mate", description: "Choose a person to be your mate. Whenever you drink, they drink." },
    { title: "Rhyme", description: "Choose a word, everyone must say a word that rhymes. First one who can't drink." },
    { title: "Categories", description: "Choose a category, everyone must name something from that category. First one who can't drink." },
    { title: "RuleMaster", description: "Create a rule, anyone who breaks it drinks." },
    { title: "Questions", description: "You start by asking someone a question. They must answer with a question, and it continues. First one who can't think of a question drinks." },
    { title: "MakeARule", description: "Create a rule, anyone who breaks it drinks." }
  ]

  title: string = "";
  description: string = "";
  @Input() card: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
      let number: number = +this.card.split("_")[1].split(".")[0];
      this.title = this.cardAction[number - 1].title;
      this.description = this.cardAction[number - 1].description;
    }


  }
}