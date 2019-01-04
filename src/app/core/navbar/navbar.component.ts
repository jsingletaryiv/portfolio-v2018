import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@app/core/services/theme.service';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  myName = 'James Singletary IV';
  myLocation = 'Located in Tampa, Florida';

  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {

    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {

    this.themeService.setDarkTheme(checked);
  }

}
