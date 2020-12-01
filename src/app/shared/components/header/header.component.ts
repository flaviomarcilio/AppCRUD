import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'fm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav() {
    this.sidenav.close();
  }

}
