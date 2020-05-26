import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Tab } from 'src/app/Models/Core/tab.model';
import { Screen1Component } from '../screen1/screen1.component';
import { Screen2Component } from '../screen2/screen2.component';
import { Screen3Component } from '../screen3/screen3.component';
import { ScreenDirective } from 'src/app/screen.directive';
import { IScreen } from 'src/app/Models/Core/screen.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(ScreenDirective) AppScreen: ScreenDirective;

  Params: any;
  Tabs: Tab[] = [new Tab("Screen 1", 1, false, Screen1Component,false, null),
  new Tab("Screen 2", 2, false, Screen2Component,false, null),
  new Tab("Screen 3", 3, false, Screen3Component,false, null)];

  CreatedTabs: Tab[];

  constructor(private authService: AuthService,
    private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

  }

  public Logout() {

    // this.authService.Logout();
    window.location.reload();
  }

  OnOpenScreen(tab: Tab) {

    // let tabActiveState = tab.IsActive;

    this.Tabs.forEach(_ => _.IsActive = false);

    if (tab.IsInitialized == false) {

      let componentFactory = this._componentFactoryResolver.resolveComponentFactory(tab.Component);

      // get the viewcontainer
      let viewContainerRef = this.AppScreen.ViewContainerRef;

      // instantiate the component
      let componentRef = viewContainerRef.createComponent(componentFactory);
      let instance: IScreen = componentRef.instance as IScreen;

      tab.IsActive = true;
      tab.IsInitialized = true;
      tab.ComponentRef = componentRef;

      instance.Tab = tab;

      // set the props
      
     
      


    } else {
      tab.IsActive = true;

    }


    // if screen not opened open it
    // if opened close it

  }

  OnCloseScreen(tab:Tab){

    tab.ComponentRef.destroy();
    
  }


}
