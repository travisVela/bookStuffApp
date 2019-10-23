import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';

import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

import { Plugins, Capacitor } from '@capacitor/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription;
  private previousAuthState = false;

  constructor(
    private platform: Platform,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.authSubscription = this.authService.userIsAuthenticated.subscribe(isAuth => {
      if (!isAuth && this.previousAuthState !== isAuth) {
        this.router.navigateByUrl('/auth');
      } 
      this.previousAuthState = isAuth;
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide();
      }
    });
  }

  onLogout() {
    this.authService.logout();
    // this.router.navigateByUrl('/auth')
  }

  closeOnSelect() {
    this.menuCtrl.close();
  }  

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

}
