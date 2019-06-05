import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  gender: string = "f";
  constructor( public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Su cita ha sido agendada exitosamente',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
