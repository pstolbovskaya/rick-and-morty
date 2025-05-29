import { Component, Input } from "@angular/core";
import {Episode} from '../../../../models/episode.model';

@Component({
  selector: 'episode-card',
  templateUrl: 'episode-card.component.html',
  styleUrls: ['episode-card.component.scss'],
})

export class EpisodeCardComponent {
  @Input({required: true}) episode!: Episode;
}
