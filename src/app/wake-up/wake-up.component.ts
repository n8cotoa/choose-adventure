import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { AdventureService } from '../adventure.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-wake-up',
  templateUrl: './wake-up.component.html',
  styleUrls: ['./wake-up.component.css'],
  providers: [AdventureService]
})
export class WakeUpComponent implements OnInit {
  myCharacter;
  constructor(private adventureService: AdventureService) { }

  ngOnInit() {
    this.adventureService.getCharacter().subscribe(characterList => {
      this.myCharacter = characterList[0];
    });
  }

  nextPage(characterToUpdate, value) {
    if (value == 2) {
      characterToUpdate.sobriety -= 10
      characterToUpdate.progress += 1
    } else if (value == 3 && characterToUpdate.money >= 100) {
      characterToUpdate.money -= 100
      characterToUpdate.progress += 1
    } else if (value == 4 ) {
      characterToUpdate.health -= 80
      characterToUpdate.progress += 1
    }
    return characterToUpdate
  }

  beginUpdatingCharacter(characterToUpdate, option) {
    let newCharacter = this.nextPage(characterToUpdate, option)
    this.adventureService.updateCharacter(newCharacter)
  }




}
