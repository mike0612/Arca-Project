import { Component } from '@angular/core';
import { Platform, MenuController, ToastController} from '@ionic/angular';
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
    private _translate: TranslateService,
    private toastCtrl: ToastController,    
  ) {
    this.initializeApp();
  }

  initializeApp() {

    let userLang = navigator.language.split('-')[0];
    userLang = /(en|de|it|fr|es|be)/gi.test(userLang) ? userLang : 'en';
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
