import { Component, OnInit } from '@angular/core';
import { IScreen } from 'src/app/Models/Core/screen.model';
import { Tab } from "../../Models/Core/tab.model"

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit, IScreen {

  ComponentRef: import("@angular/core").ComponentRef<any>;
  Tab: Tab;

  constructor() { }

  ngOnInit() {
  }

}
