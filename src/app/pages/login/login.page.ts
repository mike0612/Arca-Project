import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;
  regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  loadUser: any = [];
  pb: boolean;

  constructor(
    private menuCtrl: MenuController,
    private auth: AuthService,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private service: DatabaseService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.pb = false;
  }

  validation() {
    if (this.user.email != null && this.user.password != null) {
      if (!this.regEx.test(this.user.email)) {
        this.presentToast('Ha ingresado un correo inválido');
      } else if (this.user.password === '') {
        this.presentToast('Ingrese su contraseña');
      } else {
        this.onSubmitLogin()
      }
    } else {
      this.presentToast('Ingrese los datos solicitados para iniciar sesión');
    }
  }

  onSubmitLogin() {
    this.pb = true;
    this.presentToast('Verificando usuario');
    this.service.getFilterFieldValue('/usuarios/', 'correo', this.user.email).valueChanges().subscribe((user) => {
      this.loadUser = user;
      if (this.loadUser.find(res => res.correo === this.user.email)) {
          this.pb = false;
          this.toastCtrl.dismiss();
          this.showLoading();
          this.auth.logIn(this.user.email, this.user.password).then(res => {
            this.loadingCtrl.dismiss().then(() => {
              this.menuCtrl.enable(true);
              this.presentToast('Sesión iniciada');
              this.router.navigate(['/adopta']);
            });
          }).catch((error) => {
            this.loadingCtrl.dismiss().then(() => {
              this.presentToast('Verifique su contraseña');
            });
          });
      } else {
        this.pb = false;
        this.presentToast('El correo que ingresó no coincide con ninguna cuenta');
      }
    })
  }

  forgotPass() {

  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message, duration: 500
    });
    toast.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión',
    });
    loading.present();
  }



}
