import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { AdventureService } from '../adventure.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'],
  providers: [AdventureService]
})
export class StatusBarComponent implements OnInit {
  myCharacter;

  constructor(private adventureService: AdventureService, private route: Router) { }


  ngOnInit() {
    this.adventureService.getCharacter().subscribe(characterList => {
      this.myCharacter = characterList[0];
    });


  }



}
