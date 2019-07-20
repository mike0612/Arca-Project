import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { Denuncias } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage {
  denuncia = {} as Denuncias;
  fecha: string;

  
  constructor(
    private alertController: AlertController,
    public navCtrl: NavController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public denunciaservices: DatabaseService
  ) {const meses = new Array
    ('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
    const dias = new Array
    ('Domingo','Lunes','Martes','Miércoles','Juevez','Viernes','Sábado');

    const f = new Date();
    this.fecha = ( dias[f.getDay()] +" "+ f.getDate() + ' de ' + meses[f.getMonth()] + ' del ' + f.getFullYear()+" a las "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds());
  console.log(this.fecha)  
  }
  ionViewWillEnter() {
    document.addEventListener('backbutton', function (e) { }, false);
  }
    saveDenuncia() {
    this.denuncia.folio = ('DNC' + '' + Math.random().toString(10).substr(2, 5));
    this.denuncia.fecha =  this.fecha;
    this.denunciaservices.saveDenuncia(this.denuncia);
     
    this.clear();
  }

  clear() {
    this.denuncia.asunto = null;
    this.denuncia.nombre_de_quien_reporta = null;
    this.denuncia.numero_de_telefono = null;
    this.denuncia.direccion = null;
    this.denuncia.entre_calles = null;
    this.denuncia.referencia_del_lugar = null;
    this.denuncia.describa_su_asunto = null;
    this.denuncia.caracteristicas_de_las_mascotas = null;
    this.denuncia.nombre_duenio = null;
    this.denuncia.direccion_2 = null;
    this.denuncia.entre_calles2 = null;
    this.denuncia.referencias_2 = null;
    this.denuncia.caracteristicas_mascotas2 = null;

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Querido Usuario',
      message: 'Su acuse ha sido enviado, ¿Desea enviar otro reporte?',
      buttons: [
        {
          text: 'SI',
          handler: () => {
            console.log('Realizar Otra denuncia');

          },
        },
        {
          text: 'NO',
          handler: () => {
            this.navCtrl.navigateRoot('/header/adopta');
          },
        }
      ]

    });

    await alert.present();
  }

 
}
