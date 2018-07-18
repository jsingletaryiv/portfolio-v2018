import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

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
