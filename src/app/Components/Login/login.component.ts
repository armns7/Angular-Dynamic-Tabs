import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  OnLogin = new EventEmitter<boolean>();

  constructor(private authService:AuthService) { }

  ngOnInit() {

  }

  Login() {

    this.authService.Login();
    console.log("Logging In");
    this.OnLogin.emit(true);

  }

}
