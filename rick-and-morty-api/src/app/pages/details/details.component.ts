import {Component, inject} from "@angular/core";
import {Character} from '../../models/character.model';
import {NgForOf} from '@angular/common';
import {AppService} from '../../services/app.service';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  imports: [
    HeaderComponent

  ],
})

export class DetailsComponent {
  private appService: AppService = inject(AppService);
  private title = 'Details';
  //private character: Character;

  ngOnInit() {
    //this.character = this.appService.;
  }
}
