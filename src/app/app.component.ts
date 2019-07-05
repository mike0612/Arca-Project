import { Component } from '@angular/core';
import { Platform, MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showSplash = true;
  public appPages = [
    {
      title: 'Home',
      url: '/header/adopta',
      setting: '//configuraciones',
      url1: '//login',
      url2: '//perfil',
      url3: '//interesados',
      url4: '//mis-citas',
      url0: '//adoptados',
      url11: '//acerca-de',
      icon: 'home',
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
    private _translate: TranslateService,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
      timer(9000).subscribe(() => this.showSplash = false)

    });
  }

  initializeApp() {

    let userLang = navigator.language.split('-')[0];
    userLang = /(en|es|)/gi.test(userLang) ? userLang : '';
    this._translate.use(userLang);

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onLogOut() {
    this.auth.logOut().then(res => {
      this.menu.enable(false);
      this.presentToast('Su sesión se cerró correctamente');
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.presentToast('Ha ocurrido un error, Inténtelo más tarde');
    })
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message, duration: 500
    });
    toast.present();
  }

}
