import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController, LoadingController } from "@ionic/angular";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { DatabaseService } from '../../services/database.service'
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

  constructor(
    private menu: MenuController,
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private service: DatabaseService
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
    this.presentToast('Verificando usuario')    
    this.service.getUserEmail(this.user.email).valueChanges().subscribe((user) => {
      this.loadUser = user;
      if (this.loadUser.find(res => res.email == this.user.email)) {        
        if (this.loadUser.find(res => res.tipo == 3)) {
          this.showLoading();
          this.auth.logIn(this.user.email, this.user.password).then(res => {
            this.loadingController.dismiss().then(() => {
              this.menu.enable(true);
              this.presentToast('Sesión iniciada');
              this.router.navigate(['/adopta']);
            })
          }).catch((error) => {
            this.loadingController.dismiss().then(() => {
              this.presentToast('No se pudo iniciar sesión, revise sus datos o su conexión a internet');
            })
          })
        } else {                    
          this.presentToast('El correo que ingresó no coincide con ninguna cuenta');
        }
      } else {                        
        this.presentToast('El correo que ingresó no coincide con ninguna cuenta');
      }
    })
  }

  forgotPass() {

  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión',
    });
    loading.present();
  }



}
