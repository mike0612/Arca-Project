import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/adopta',
      url1: '//login',
      url2: '//perfil',
      icon: 'arrow-round-back',
      heart: 'heart',
      person: 'person',
      paw: 'paw',
      board: 'clipboard',
      informacion: 'information-circle',
      log: 'log-out',
      settings: 'md-settings'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,
    private auth: AuthService,
    private translateService: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.translateService.setDefaultLang('es')
    this.translateService.use('en');

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onLogOut() {
    this.auth.logOut().then(res => {
      this.menu.enable(false);
      this.router.navigate(['/login']);
    }).catch(error => console.log(error))

  }



}
