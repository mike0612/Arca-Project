import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuSegmentComponent } from './menu-segment/menu-segment.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { customTranslateLoader } from './translate';


@NgModule({
  declarations: [
    MenuSegmentComponent,    
  ],
  exports: [
    MenuSegmentComponent,    
  ],
  imports: [
    CommonModule, 
    IonicModule,   
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
})

export class ComponentsModule { }
