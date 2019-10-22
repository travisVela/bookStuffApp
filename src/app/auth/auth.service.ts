import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firebaseToken } from '../../../src/keys';


// interface for auth response data for better automcompletion
interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  localId: string,
  expiresIn: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  private _userId = null;
  token = firebaseToken;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.token}`, 
      { email: email, password: password, returnSecureToken: true })
  }
  
  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated =false;
  }
}
