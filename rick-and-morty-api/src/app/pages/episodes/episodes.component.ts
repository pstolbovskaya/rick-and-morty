import {Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {AppService} from '../../services/app.service';
import {Episode} from '../../models/episode.model';
import {HeaderComponent} from '../../components/header/header.component';
import {EpisodeListComponent} from './components/episode-list/episode-list.component';

@Component({
  selector: 'app-episodes',
  styleUrls: ['./episodes.component.scss'],
  templateUrl: './episodes.component.html',
  imports: [
    HeaderComponent,
    EpisodeListComponent
  ],
})

export class EpisodesComponent {
  private appService: AppService = inject(AppService);
  protected episodes: Episode[] = [];
  private pageNumber: number = 1;

  ngOnInit() {
    this.getEpidodes(this.pageNumber)
  }

  getEpidodes(page: number = 1) {
    this.appService.getEpisodes(page).subscribe(episodes => {
      this.episodes = episodes.results;
    });
  }
}
