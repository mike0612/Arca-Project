import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from './../../models';
import { NavController, AlertController } from '@ionic/angular';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DatabaseService,
    public navCtrl: NavController,
    private alertController: AlertController,
    private router: Router
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
    this.solicitud.id = Date.now();
    this.solicitud.folio = ('SLD' + '' + Math.random().toString(10).substr(2, 5));
    this.solicitud.status = 'En proceso';
    this.solicitud.mascota = this.mascota;
    this.solicitud.respuestas = this.respuestas;
    this.datosPersonales.fecha = this.fecha;
    this.solicitud.datosPersonales = this.datosPersonales;

    this.service.addNew(this.database, this.solicitud).then(() => {
      this.presentAlert();
      this.router.navigate(['/header/adopta']);
      // mensaje o accion si se guarda
    }).catch(() => {
      // mensaje o accion si no se guarda o si ocurre un error
    });
  }

  closeDetail() {
    this.navCtrl.pop();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Sus datos se enviaron correctamente',
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

}
