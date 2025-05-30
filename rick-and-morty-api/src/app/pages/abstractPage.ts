import {ActivatedRoute, Params, Router} from '@angular/router';
import {inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AppService} from '../services/app.service';

export abstract class AbstractPage {
  protected pageNumber: number = 1;
  protected maxPage: number = 1;
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  protected appService: AppService = inject(AppService);

  constructor() {
    this.activatedRoute.queryParams.pipe(takeUntilDestroyed()).subscribe((params: Params): void => {
      this.pageNumber = +params['page'] ? +params['page'] : 1;
    });
  }

  init() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.pageNumber === 0 ? null : this.pageNumber,
      },
      queryParamsHandling: 'merge',
    });

    this.getContent();
  }

  onPageChanged(page: number): void {
    this.pageNumber = page;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: page === 0 ? null : page,
      },
      queryParamsHandling: 'merge',
    });
    this.getContent()
  }

  abstract getContent(): void
}
