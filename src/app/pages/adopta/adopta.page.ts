import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../../services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.page.html',
  styleUrls: ['./adopta.page.scss'],
})
export class AdoptaPage implements OnInit {

  database = '/mascotas/';
  mascotas: any = [];

  constructor(
    private service: DatabaseService,
    //private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    //this.showLoading();
    this.service.getFilterFieldValue(this.database, 'status', 'Disponible').valueChanges().subscribe((res) => {
      this.mascotas = res;
     // this.loadingCtrl.dismiss();
    });
  }

  /*async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando datos',
    });
    loading.present();
  }*/

}
