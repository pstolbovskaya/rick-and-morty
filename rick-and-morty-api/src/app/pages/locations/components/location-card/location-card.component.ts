import {Component, Input} from '@angular/core';
import {Location} from '../../../../models/location.model';

@Component({
  selector: 'location-card-component',
  templateUrl: 'location-card.component.html',
  styleUrls: ['location-card.component.scss']
})

export class LocationCardComponent {
  @Input({required: true}) location!: Location;
}
