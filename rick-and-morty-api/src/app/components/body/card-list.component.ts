import {Component, Input} from '@angular/core';
import {Character} from '../../models/character.model';
import {CardComponent} from '../card/card.component';
import {NgForOf} from '@angular/common';
@Component({
  selector: 'card-list',
  templateUrl: 'card-list.component.html',
  imports: [
    CardComponent,
    NgForOf
  ],
  styleUrls: ['card-list.component.scss'],
})
export class CardListComponent {
  @Input({
    required: true,
  }) characters!: Character[];
}
