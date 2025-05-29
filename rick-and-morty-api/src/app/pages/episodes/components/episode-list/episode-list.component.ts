import {Component, Input} from '@angular/core';
import {Episode} from '../../../../models/episode.model';
import {EpisodeCardComponent} from '../episode-card/episode-card.component';

@Component({
  selector: 'episode-list',
  templateUrl: 'episode-list.component.html',
  styleUrls: ['episode-list.component.scss'],
  imports: [
    EpisodeCardComponent
  ]
})

export class EpisodeListComponent {
  @Input({required: true}) episodes!: Episode[];
}
