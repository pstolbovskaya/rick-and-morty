import {Component, Input} from '@angular/core';
import {Character} from '../../../../models/character.model';
import {CharacterCardComponent} from '../character-card/character-card.component';
import {NgForOf} from '@angular/common';
@Component({
  selector: 'character-list',
  templateUrl: 'character-list.component.html',
  imports: [
    CharacterCardComponent,
    NgForOf
  ],
  styleUrls: ['character-list.component.scss'],
})
export class CharacterListComponent {
  @Input({
    required: true,
  }) characters!: Character[];
}
