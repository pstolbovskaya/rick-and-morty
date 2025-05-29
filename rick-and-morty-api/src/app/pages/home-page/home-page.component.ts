import {Component, Input, Output, inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {Character} from '../../models/character.model';
import {AppService} from '../../services/app.service';
import {CharacterListComponent} from './components/character-list/character-list.component';
import {PaginatorComponent} from '../../components/paginator/paginator.component';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
  imports: [HeaderComponent, CharacterListComponent, PaginatorComponent],
})

export class HomePageComponent {
  protected characters: Character[] = [];
  public maxPage = 1;
  protected pageNumber: number = 1;
  private appService: AppService = inject(AppService);

  ngOnInit(): void {
    this.getCharacters();
  }

  onPageChangePage(page: number): void {
    this.pageNumber = page;
    this.getCharacters(this.pageNumber)
  }

  getCharacters(page: number = 1) {
    this.appService.getCharacters(page).subscribe(characters => {
      this.characters = characters.results;
      this.maxPage = characters.info.pages;
      console.log(this.maxPage);
    })
  }
}
