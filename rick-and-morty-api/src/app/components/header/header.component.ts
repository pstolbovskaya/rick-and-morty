import {Component, inject, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  imports: [],
})

export class HeaderComponent {
  private router: Router = inject(Router);

 redirect(path: string) {
   this.router.navigate([path]);
 }
}
