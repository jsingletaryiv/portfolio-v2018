import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox-page.component.html',
  styleUrls: ['./sandbox-page.component.scss']
})
export class SandboxPageComponent implements OnInit {

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
