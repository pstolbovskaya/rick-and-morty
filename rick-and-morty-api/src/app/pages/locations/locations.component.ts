import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {Location} from '../../models/location.model';
import {LocationListComponent} from './components/location-list/location-list.component';
import {PaginatorComponent} from '../../components/paginator/paginator.component';
import {AbstractPage} from '../abstractPage';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  imports: [
    HeaderComponent,
    LocationListComponent,
    PaginatorComponent
  ],
})

export class LocationsComponent extends AbstractPage{
  protected locations: Location[] = [];

  ngOnInit(): void {
    this.init();
  }

  getContent(page: number = 1) {
    this.appService.getLocations(this.pageNumber).subscribe(locations => {
      this.locations = locations.results;
      this.maxPage = locations.info.pages;
    })
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
