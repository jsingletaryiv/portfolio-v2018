import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@app/core/services/theme.service';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  // Page Header
  // pageTitle = 'Welcome';
  pageSubTitle = 'Senior Application / UI/UX Developer';
  // pageSubTitle = 'Since MCMXCVIII';

  // Section 1
  section1Title = 'Forging Concepts into Creation //';
  section1Text = '';
  missionTitle = 'Mission Statement //';
  missionText = '';

  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {

    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {

    this.themeService.setDarkTheme(checked);
  }

}
