import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isDisplay = false;

  constructor() { }

  show() {
    this.isDisplay = !this.isDisplay;
  }

  ngOnInit(): void {
  }

}
