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
      console.log(this.myCharacter.progress)
    });
  }

}
