import {Component} from '@angular/core';
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

  listenFilter() {
    /*this.filterControl.valueChanges.pipe().subscribe(filter => {
      this.filterControl.setValue(filter);
      this.appService.getFilteredCharacters(filter).subscribe(characters => {
        this.characters = characters.results;
      });
    });*/
  }
}
