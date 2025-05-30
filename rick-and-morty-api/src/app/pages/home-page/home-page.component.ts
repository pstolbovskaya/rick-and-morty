import {Component, Input, Output, inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {Character} from '../../models/character.model';
import {AppService} from '../../services/app.service';
import {CharacterListComponent} from './components/character-list/character-list.component';
import {PaginatorComponent} from '../../components/paginator/paginator.component';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {AbstractPage} from '../abstractPage';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
  imports: [HeaderComponent, CharacterListComponent, PaginatorComponent],
})

export class HomePageComponent extends AbstractPage{
  protected characters: Character[] = [];

  ngOnInit(): void {
    this.init()
  }

  getContent() {
    this.appService.getCharacters(this.pageNumber).subscribe(characters => {
      this.characters = characters.results;
      this.maxPage = characters.info.pages;
    })
  }
}
