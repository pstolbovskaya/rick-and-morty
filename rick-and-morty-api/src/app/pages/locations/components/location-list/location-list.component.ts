import {Component, inject, Input} from '@angular/core';
import {AppService} from '../../../../services/app.service';
import {Location} from '../../../../models/location.model';
import {LocationCardComponent} from '../location-card/location-card.component';

@Component({
  selector: 'location-list-component',
  templateUrl: 'location-list.component.html',
  styleUrls: ['location-list.component.scss'],
  imports: [
    LocationCardComponent
  ]
})

export class LocationListComponent {
  @Input() locations: Location[] = [];
}
