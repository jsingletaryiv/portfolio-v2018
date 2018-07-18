import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

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
