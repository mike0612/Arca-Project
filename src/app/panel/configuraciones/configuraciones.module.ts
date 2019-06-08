import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConfiguracionesPage } from './configuraciones.page';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { customTranslateLoader } from 'src/app/app.module';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
      }
    }),
    RouterModule.forChild(routes),
  ],
  declarations: [ConfiguracionesPage]
})
export class ConfiguracionesPageModule {}
