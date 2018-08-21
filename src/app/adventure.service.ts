import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AdventureService {
  characters: FirebaseListObservable<any[]>;
  characterId;

  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('character');
  }

  getCharacter(){
    return this.characters;
  }

  uploadCharacter(newCharacter: Character) {
    this.characters.push(newCharacter);
  }

  removeAllCharacters() {
    this.characters.remove();
  }


}
