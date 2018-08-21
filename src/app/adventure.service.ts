import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AdventureService {
  character: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.character = database.list('character');
  }

  getCharacter(){
    return this.character;
  }

  uploadCharacter(newCharacter: Character) {
    this.character.push(newCharacter);
  }
}
