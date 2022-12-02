import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Sensoren Tracker';
  public imagePath: string = "./../assets/images/Sensoren.png";

  constructor() { }

  ngOnInit(): void {
  }

}
