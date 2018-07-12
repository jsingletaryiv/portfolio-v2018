import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  welcomePageTitle = 'James Singletary IV';
  welcomePageSubTitle = 'Senior Application / Software / UI/UX Developer';
  welcomePageSectionTitle = 'Welcome to my tiny footprint on the internet...';

  constructor() { }

  ngOnInit() {
    // Init welcome page here...
  }
}
