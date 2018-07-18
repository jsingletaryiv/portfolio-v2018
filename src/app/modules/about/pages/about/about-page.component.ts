import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  // Page Header
  pageTitle = 'Title';
  pageSubTitle = 'Sub-Title';

  // Section 1
  section1Title = 'Test...';
  section1Text = '';
  missionTitle = 'Mission:';
  missionText = '';

  constructor() { }

  ngOnInit() {
  }

}
