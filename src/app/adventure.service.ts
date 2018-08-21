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

  getCharacterById(characterId: string){
    return this.database.object('/character/' + characterId);
  }

  uploadCharacter(newCharacter: Character) {
    this.characters.push(newCharacter);
  }

  removeAllCharacters() {
    this.characters.remove();
  }

  updateCharacter(localUpdateCharacter) {
    var characterEntryInFirebase = this.getCharacterById(localUpdateCharacter.$key);
    characterEntryInFirebase.update({health: localUpdateCharacter.health,
                                      money: localUpdateCharacter.money,
                                      sobriety: localUpdateCharacter.sobriety,
                                      progress: localUpdateCharacter.progress
                                    });
                                      console.log(localUpdateCharacter)
  }


}
