import {Component, DestroyRef, inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {Character, CharactersDTO} from '../../models/character.model';
import {CharacterListComponent} from './components/character-list/character-list.component';
import {PaginatorComponent} from '../../components/paginator/paginator.component';
import {AbstractPage} from '../abstractPage';
import {catchError, debounce, debounceTime, filter, interval, Observable, Observer, of, retry, switchMap} from 'rxjs';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
  imports: [HeaderComponent, CharacterListComponent, PaginatorComponent, ReactiveFormsModule],
})

export class HomePageComponent extends AbstractPage{
  protected characters: Character[] = [];
  protected filterControl = new FormControl();
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.init();
  }

  getContent() {
    this.appService.getCharacters(this.pageNumber).subscribe(characters => {
      this.characters = characters.results;
      this.maxPage = characters.info.pages;
    })
  }

  listenFilter() {
    this.filterControl.valueChanges.pipe(debounceTime(1000), switchMap((filter: string) =>
      this.appService.getFilteredCharacters(filter)), catchError((err, catched) => catched), takeUntilDestroyed(this.destroyRef)).subscribe((characters) => {
        this.characters = characters.results;
      });
  }

}
