import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';

import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
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
    this.router.navigateByUrl('/auth')
  }

  closeOnSelect() {
    this.menuCtrl.close();
  }  

}
