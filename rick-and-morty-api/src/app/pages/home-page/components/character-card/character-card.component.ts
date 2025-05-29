import {Component, Input} from '@angular/core';
import {Character} from '../../../../models/character.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'character-card',
  templateUrl: 'character-card.component.html',
  styleUrls: ['character-card.component.scss'],
  imports: [
    RouterLink
  ]
})

export class CharacterCardComponent {
  @Input() character!: Character;
}
