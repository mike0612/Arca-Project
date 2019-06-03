import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MenuSegmentComponent } from './menu-segment/menu-segment.component';
import { TipComponent } from './tip/tip.component';


@NgModule({
  declarations: [
    MenuSegmentComponent,    
  ],
  exports: [
    MenuSegmentComponent,    
  ],
  imports: [
    CommonModule, 
    IonicModule       
  ]
})
export class ComponentsModule { }