import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from './../../models';
import { NavController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-adopta-form',
  templateUrl: './adopta-form.page.html',
  styleUrls: ['./adopta-form.page.scss'],
})
export class AdoptaFormPage implements OnInit {

  database = '/solicitudesAdopcion/';
  solicitud = {} as Solicitud;
  mascota: any = [];
  respuestas: any = [];
  datosPersonales: any = [];
  fecha: string;
  loaderToShow: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DatabaseService,
    public navCtrl: NavController,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    const idMascota = this.activatedRoute.snapshot.params['mascota.id'];
    if (!this.mascota) { return; }
    this.service.getDataId('/mascotas/', idMascota).valueChanges().subscribe((res) => {
      this.mascota = res;
    });
    this.getFecha();
  }

  guardar() {
    this.showLoader();
    this.solicitud.id = Date.now();
    this.solicitud.folio = ('SLD' + '' + Math.random().toString(10).substr(2, 5));
    this.solicitud.status = 'En proceso';
    this.solicitud.mascota = this.mascota;
    this.solicitud.respuestas = this.respuestas;
    this.datosPersonales.fecha = this.fecha;
    this.solicitud.datosPersonales = this.datosPersonales;

    this.service.addNew(this.database, this.solicitud).then(() => {
      this.hideLoader();
    }).catch(() => {
      //
    });
  }

  closeDetail() {
    this.navCtrl.pop();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Sus datos se enviaron correctamente. Tendrá ' +
      'un  plazo máximo de tres días para recoger su mascota en caso contrario ' +
      'el trámite será cancelado.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  getFecha() {
    const meses = new Array
      ('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
        'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
    const f = new Date();
    this.fecha = (f.getDate() + '/' + meses[f.getMonth()] + '/' + f.getFullYear());
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Enviando datos'
    }).then((res) => {
      res.present();
    });
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
      this.presentAlert();
      this.router.navigate(['/header/adopta']);
    }, 1000);
  }

}
