import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController, LoadingController } from "@ionic/angular";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;
  regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  loadUser: true;

  constructor(
    public menu: MenuController,
    public auth: AuthService,
    private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  validation() {
    if (this.user.email != null && this.user.password != null) {
      if (!this.regEx.test(this.user.email)) {
        this.presentToast('Ha ingresado un correo inválido, intente nuevamente');
      } else if (this.user.password == '') {
        this.presentToast('Ingrese su contraseña');
      } else {
        this.onSubmitLogin()
      }
    } else {
      this.presentToast('Ingrese los datos solicitados para iniciar sesión');
    }
  }

  onSubmitLogin() {
    this.presentLoading('Verificando cuenta');
    this.auth.logIn(this.user.email, this.user.password).then(res => {
      this.loadingController.dismiss();
      this.menu.enable(true);
      this.router.navigate(['/adopta']);
    }).catch((error) => {
      this.loadingController.dismiss().then(() => {
        this.presentToast('No se pudo iniciar sesión, revise sus datos o su conexión a internet');
      })
    })
  }

  forgotPass() {

  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading(msg: string) {
    const loading = await this.loadingController.create({
      message: msg,
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }



}
