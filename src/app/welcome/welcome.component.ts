import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  appTitle = 'James Singletary\'s Online Portfolio';
  appSubTitle = 'Welcome to my tiny footprint on the Internet:';

  constructor() { }

  ngOnInit() {
  }

}
