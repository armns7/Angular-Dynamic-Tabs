import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Login/login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ChromeComponent } from './Components/chrome/chrome.component';
import { MoveClientComponent } from './Components/MoveClient/move-client.component';
import { ProvisionClientComponent } from './Components/ProvisionClient/provision-client.component';
import { ScreenDirective } from './screen.directive';
import { HomeComponent } from './Components/home/home.component';
import { AuthService } from './Services/auth.service';
import { Screen1Component } from './Components/screen1/screen1.component';
import { Screen2Component } from './Components/screen2/screen2.component';
import { Screen3Component } from './Components/screen3/screen3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ChromeComponent,
    MoveClientComponent,
    ProvisionClientComponent,
    ScreenDirective,
    HomeComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent, Screen1Component, Screen2Component, Screen3Component],
})
export class AppModule { }
