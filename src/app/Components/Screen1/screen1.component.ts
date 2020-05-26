import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/Models/Core/tab.model';
import { IScreen } from 'src/app/Models/Core/screen.model';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit, IScreen {

  ComponentRef: import("@angular/core").ComponentRef<any>;
  Tab:Tab;

  constructor() { }

  ngOnInit() {
  }

}
