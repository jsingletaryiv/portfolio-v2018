import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class ThemeService {

  private _darkTheme: Subject<boolean> = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean) {

    console.log('Theme is Currently Dark: ', isDarkTheme);
    this._darkTheme.next(isDarkTheme);
  }

  constructor() { }

}
