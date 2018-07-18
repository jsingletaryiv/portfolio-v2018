import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  // Page Header
  pageTitle = 'James Singletary IV';
  pageSubTitle = 'Senior Application / Software / UI/UX Developer';

  // Section 1
  section1Title = 'Hello and welcome to my tiny imprint on the internet...';
  section1Text = '';
  missionTitle = 'Mission Statement:';
  missionText = '';

  constructor() { }

  ngOnInit() {
    // Init welcome page here...
  }
}
