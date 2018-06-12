import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  myName = 'James Singletary IV';
  myLocation = 'Tampa, Florida';

  constructor() { }

  ngOnInit() {
  }

}
