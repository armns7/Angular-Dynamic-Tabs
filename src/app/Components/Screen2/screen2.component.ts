import { Component, OnInit } from '@angular/core';
import { IScreen } from 'src/app/Models/Core/screen.model';
import { Tab } from "../../Models/Core/tab.model"

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit, IScreen {

  ComponentRef: import("@angular/core").ComponentRef<any>;
  Tab: Tab;

  constructor() { }

  ngOnInit() {
  }

}
