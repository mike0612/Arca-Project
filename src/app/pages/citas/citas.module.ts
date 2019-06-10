import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CitasPage } from './citas.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { customTranslateLoader } from 'src/app/app.module';
const routes: Routes = [
  {
    path: '',
    component: CitasPage
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
    ComponentsModule
  ],
  declarations: [CitasPage]
})
export class CitasPageModule {}
