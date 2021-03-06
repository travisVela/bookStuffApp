import { Injectable, LOCALE_ID, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firebaseToken } from '../../../src/keys';
import { EmailValidator } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { User } from './user.model';
import { map, tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';


// interface for auth response data for better automcompletion
export interface AuthResponseData {
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
export class AuthService implements OnDestroy {
  private _user = new BehaviorSubject<User>(null);
  private activeLogoutTimer: any;

  firebaseToken = firebaseToken;
  

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return !!user.token
      } else {
        return false;
      }
    }))
  }

  get userId() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return user.id
      } else {
        return null;
      }
    }));
  }

  get token() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return user.token
      } else {
        return null;
      }
    }));
  }

  constructor(private http: HttpClient) { }

  autoLogin() {
    return from(Plugins.Storage.get({ key: 'authData' })).pipe(
      map(storedData => {
        if (!storedData || !storedData.value) {
          return null;
        }
        const parsedData = JSON.parse(storedData.value) as {
          userId: string,
          token: string, 
          tokenexpirationDate: string,
          email: string
        };
        const expirationTime = new Date(parsedData.tokenexpirationDate);
        if (expirationTime <= new Date()) {
          return null;
        }
        const user = new User(
          parsedData.userId,
          parsedData.token,
          parsedData.email,
          expirationTime
        );
        return user;
      }),
      tap(user => {
        if (user) {
          this._user.next(user);
          this.autoLogout(user.tokenDuration)
        }
      }),
      map(user => {
        return !!user;
      })
    );
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseToken}`, 
      { email: email, password: password, returnSecureToken: true }
    ).pipe(tap(this.setUserData.bind(this)));
  }
  
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        this.firebaseToken
      }`,
      { email: email, password: password, returnSecureToken: true }
    )
    .pipe(tap(this.setUserData.bind(this)));
  }

  private autoLogout(duration: number) {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this.activeLogoutTimer = setTimeout(() => {
      this.logout()
    }, duration)
  }

  logout() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this._user.next(null);
    Plugins.Storage.remove({key: 'authData'});
  }

  ngOnDestroy() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
  }

  private setUserData(userData: AuthResponseData) {
    const expirationTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));
    const user = new User(
      userData.localId,
      userData.email,
      userData.idToken,
      expirationTime
    );
      this._user.next(user);
      this.autoLogout(user.tokenDuration)
      this.storeAuthData(
        userData.localId,
        userData.idToken,
        expirationTime.toISOString(),
        userData.email
      )
  }

  private storeAuthData(
    userId: string,
    token: string,
    tokenExpirtionDate: string,
    email: string
  ) {
    const data = JSON.stringify({
      userId: userId,
      token: token,
      tokenExpirtionDate: tokenExpirtionDate,
      email: email
    })
    Plugins.Storage.set({key: 'authData', value: data})
  }
}
