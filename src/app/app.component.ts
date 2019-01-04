import { Component, ViewChild, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MediaMatcher } from '@angular/cdk/layout';

import { Observable } from 'rxjs/Observable';
import { ThemeService } from '@app/core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  myName = 'James Singletary IV';
  myLocation = 'Tampa, Florida';

  isDarkTheme: Observable<boolean>;
  mediaQuery: MediaQueryList;

  private _mediaQueryListener: () => void;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod(): void {
  //   this.trigger.openMenu();
  // }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private themeService: ThemeService) {
    this.mediaQuery = media.matchMedia('(max-width: 600px)');
    this._mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQuery.addListener(this._mediaQueryListener);
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnDestroy() {
    this.mediaQuery.removeListener(this._mediaQueryListener);
  }

}
