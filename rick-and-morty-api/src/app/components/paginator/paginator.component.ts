import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.scss'],
  imports: [],
})

export class PaginatorComponent {
  @Input() maxPages: number = 1;
  @Input({required:true}) public currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  constructor() { }

  onPageChange(page:number): void {
    this.pageChange.emit(this.currentPage + page);
  }
}
