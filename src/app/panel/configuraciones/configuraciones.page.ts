import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage implements OnInit {
  
  constructor(
    private navCtrl: NavController,
    private _translate: TranslateService
  ) {  
    
  }

  ngOnInit() {
  }
  cambiaIdioma(idioma: string) {
    console.log(`Traduzco a: ${idioma}`);
    this._translate.use(idioma);
  }
  
}
