import {Component, inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {Location} from '../../models/location.model';
import {AppService} from '../../services/app.service';
import {LocationListComponent} from './components/location-list/location-list.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  imports: [
    HeaderComponent,
    LocationListComponent
  ],
})

export class LocationsComponent {
  protected locations: Location[] = [];
  public maxPage = 1;
  protected pageNumber: number = 1;
  private appService: AppService = inject(AppService);

  ngOnInit(): void {
    this.getLocations();
  }

  onPageChangePage(page: number): void {
    this.pageNumber = page;
    this.getLocations(this.pageNumber)
  }

  getLocations(page: number = 1) {
    this.appService.getLocations(page).subscribe(locations => {
      this.locations = locations.results;
      this.maxPage = locations.info.pages;
      console.log(this.maxPage);
    })
  }
}
