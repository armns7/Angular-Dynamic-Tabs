import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LoggedIn = false;

  constructor() { }

  public Login() {

    this.LoggedIn = true;
  }

  public Logout() {

    this.LoggedIn = false;
  }

  public IsAuthenticated() {

    return this.LoggedIn == true;
  }

}
