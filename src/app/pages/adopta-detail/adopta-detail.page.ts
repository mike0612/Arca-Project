import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { share } from 'rxjs/operators';
@Component({
  selector: 'app-adopta-detail',
  templateUrl: './adopta-detail.page.html',
  styleUrls: ['./adopta-detail.page.scss'],
})
export class AdoptaDetailPage implements OnInit {

  database = '/mascotas/';
  mascota: any = [];

  option = {
    share: true,
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DatabaseService,
    private router: Router,
    private alertController: AlertController,
    private photoviewer: PhotoViewer,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['a.id'];
    if (!id) { return; }
    this.service.getDataId(this.database, id).valueChanges().subscribe((res) => {
      this.mascota = res;
    });
  }

  adopta() {
    this.router.navigate(['/adoptaform', this.mascota.id]);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Al enviar este documento, el adoptante acepta todos los términos. El adoptado será un miembro más de su familia.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }


  preview(data) {
    this.photoviewer.show(data.foto, data.raza, this.option);
  }

}
