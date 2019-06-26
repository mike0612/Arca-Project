import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage implements OnInit {
  //gender: string = "Adopción";
  constructor( public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Su acuse ha sido enviado',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
