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
    console.log(characterToUpdate.progress)
    if (value == 2) {
      characterToUpdate.sobriety -= 10
      characterToUpdate.progress = 2
    } else if (value == 3 && characterToUpdate.money >= 100) {
      characterToUpdate.money -= 100
      characterToUpdate.progress = 3
    } else if (value == 4 ) {
      characterToUpdate.health -= 20
      characterToUpdate.progress = 3
    } else if (value == 5 ) {
      characterToUpdate.health -= 40
      characterToUpdate.progress = 100
    } else if (value == 6 ) {
      characterToUpdate.health -= 40
      characterToUpdate.progress = 200
    } else if (value == 8 ) {
      characterToUpdate.health -= 40
      characterToUpdate.progress = 101
    } else if (value == 9 ) {
      characterToUpdate.sobriety -= 40
      characterToUpdate.progress = 103
      characterToUpdate.money -=20
    } else if (value == 10 ) {
      characterToUpdate.sobriety -= 40
      characterToUpdate.health -= 20
      characterToUpdate.money -= 100
      characterToUpdate.progress = 104
    } else if (value == 11 ) {
      characterToUpdate.progress += 105
    } else if (value == 12 ) {
      characterToUpdate.progress = 106
    } else if (value == 13 ) {
      characterToUpdate.progress = 108
    } else if (value == 14 ) {
      characterToUpdate.progress = 107
    } else if (value == 15 ) {
      characterToUpdate.progress = 109
      characterToUpdate.health = 0
    } else if (value == 15 ) {
      characterToUpdate.progress = 108
      characterToUpdate.health  -= 20
      // 16
    } else if (value == 17) {
      characterToUpdate.progress = 201
      characterToUpdate.health  += 20
      characterToUpdate.sobriety  = 100
    } else if (value == 18 ) {
      characterToUpdate.progress = 202
      characterToUpdate.sobriety  -= 20
    } else {
      characterToUpdate.progress += 1
    }
    return characterToUpdate
  }

  beginUpdatingCharacter(characterToUpdate, option) {
    let newCharacter = this.nextPage(characterToUpdate, option)
    this.adventureService.updateCharacter(newCharacter)
  }




}
