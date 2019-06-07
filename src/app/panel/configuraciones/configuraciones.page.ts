import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage implements OnInit {
  idioms: any[] = [];
  constructor(
    private navCtrl: NavController,
    private translateService: TranslateService
  ) {  
    this.idioms = [
    {
      value: 'es',
      label: 'Español'
    },
    {
      value: 'en',
      label: 'Ingles'
    },
    {
      value: 'pt',
      label: 'Portugués'
    }
  ];
  }

  ngOnInit() {
  }
  choose(lang) {
    this.translateService.use(lang);
  }
}
