import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { AdventureService } from '../adventure.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css'],
  providers: [AdventureService]
})
export class CharacterCreationComponent implements OnInit {

  constructor(private adventureService: AdventureService, private route: Router) { }

  ngOnInit() {
  }

  getMoney(status: string) {
    if (status === 'Rich') {
      return 10000;
    } else if ( status === 'Middle Class') {
      return 5000;
    } else if ( status === 'Poor') {
      return 500;
    };
  }

  wakeUp(name: string, status: string) {
    this.adventureService.removeAllCharacters();
    let money = this.getMoney(status)
    const newCharacter: Character = new Character(name, status, money, 100, 100, 1);
    this.adventureService.uploadCharacter(newCharacter);
    this.route.navigate(['wake-up']);
  }

}
