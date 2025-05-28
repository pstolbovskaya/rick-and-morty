import {Component, Input, Output, inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {Character} from '../../models/character.model';
import {AppService} from '../../services/app.service';
import {CardListComponent} from '../../components/body/card-list.component';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
  imports: [HeaderComponent, CardListComponent],
})

export class HomePageComponent {
  protected characters: Character[] = [];
  private appService: AppService = inject(AppService);
  private currentPage: number = 1;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(page: number = 1) {
    this.appService.getCharacters(page).subscribe(characters => {
      this.characters = characters.results;
      console.log(this.characters);
    })
  }
}
