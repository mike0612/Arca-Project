import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { Solicitud } from './../../models';

@Component({
  selector: 'app-adopta-form',
  templateUrl: './adopta-form.page.html',
  styleUrls: ['./adopta-form.page.scss'],
})
export class AdoptaFormPage implements OnInit {

  database = '/solicitudesMascotas/';
  mascota: any;
  solicitud = {} as Solicitud;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DatabaseService,
  ) { }

  ngOnInit() {
    this.mascota = this.activatedRoute.snapshot.params['mascota.id'];
    if (!this.mascota) { return; }
  }

  guardar() {
    this.solicitud.id = Date.now();
    this.solicitud.idMascota = this.mascota;
    this.solicitud.folio = ('SLD' + '' + Math.random().toString(10).substr(2, 5));
    this.solicitud.estado = 0;
    this.service.addNew(this.database, this.solicitud).then(() => {
      // mensaje o accion si se guarda
    }).catch(() => {
      // mensaje o accion si no se guarda o si ocurre un error
    });
  }

  closeDetail() { }

}
