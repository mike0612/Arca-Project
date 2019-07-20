import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ThemeService } from './../../services';
import { Themes } from './../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  private color = ['color1', 'color2', 'color3', 'color4', 'color5'];

  @ViewChild(IonSegment) s: IonSegment;

  constructor(
    private alertController: AlertController,
    public navCtrl: NavController,
    private router: Router,
    private theme: ThemeService,
  ) { }

  ngOnInit() {
    this.s.value = 'adopta';
    this.theme.setTheme(Themes[this.color[0]]);
  }

  ionViewWillEnter() {
    document.addEventListener('backbutton', function (e) { }, false);
  }

  segmentChanged(event) {
    const page = event.detail.value;
    switch (page) {
      case 'adopta':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(Themes[this.color[0]]);
        break;
      case 'noticias':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(Themes[this.color[1]]);
        break;
      case 'tips':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(Themes[this.color[2]]);
        break;
      case 'denuncia':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(Themes[this.color[3]]);
        break;
      case 'contacto':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(Themes[this.color[4]]);
        break;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención Querido Usuario',
      message: 'Todos sus datos son manipulados con total seguridad y confidencialidad',
      buttons: [
        {
          text: 'Entendido',
     
        },
   
      ]

    });

    await alert.present();
  }
}

