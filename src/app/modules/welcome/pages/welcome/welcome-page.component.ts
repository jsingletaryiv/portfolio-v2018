import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  viewTitle = 'James Singletary\'s Online Portfolio';
  viewSubTitle = 'Welcome to my tiny footprint on the Internet:';

  constructor() { }

  ngOnInit() {
  }

}
