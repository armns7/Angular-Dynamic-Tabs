import { Component, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { ScreenDirective } from './screen.directive';
import { HomeComponent } from './Components/home/home.component';
import { AuthService } from './Services/auth.service';
// import { HomeComponent } from './Components/Home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Screens: string[] = ["Screen 1", "Screen 2", "Screen 3"];

  title = 'TabbedScreensDemo';

  @ViewChild(ScreenDirective) ScreenHost: ScreenDirective;
  @Input() ads: any;

  @ViewChild('tabRef') tabTemplate;
  
  currentAdIndex = -1;


  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private authService: AuthService) {

  }

  OnLogin() {

    console.log("Logged in");

    // open home component
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);

    let viewContainerRef = this.ScreenHost.ViewContainerRef;

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<HomeComponent>componentRef.instance).Params = {
      Id: 1,
      Message: "Coming from Login"
    };

  }


  onTabOpen() {
    // this.tabsComponent.openTab(
    //   `Editing ${person.name}`,
    //   this.editPersonTemplate,
    //   person,
    //   ...
    // );
  }

}
