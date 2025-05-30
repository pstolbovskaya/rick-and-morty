import {Component, inject} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Episode} from '../../models/episode.model';
import {HeaderComponent} from '../../components/header/header.component';
import {EpisodeListComponent} from './components/episode-list/episode-list.component';
import {PaginatorComponent} from '../../components/paginator/paginator.component';
import {AbstractPage} from '../abstractPage';

@Component({
  selector: 'app-episodes',
  styleUrls: ['./episodes.component.scss'],
  templateUrl: './episodes.component.html',
  imports: [
    HeaderComponent,
    EpisodeListComponent,
    PaginatorComponent
  ],
})

export class EpisodesComponent extends AbstractPage{
  protected episodes: Episode[] = [];

  ngOnInit(): void {
    this.init();
  }

  getContent() {
    this.appService.getEpisodes(this.pageNumber).subscribe(episodes => {
      this.episodes = episodes.results;
      this.maxPage  = episodes.info.pages;
    });
  }
}
