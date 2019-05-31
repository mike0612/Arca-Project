import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSegmentComponent } from './menu-segment/menu-segment.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    MenuSegmentComponent
  ],
  exports: [
    MenuSegmentComponent
  ],
  imports: [
    CommonModule, 
    IonicModule       
  ]
})
export class ComponentsModule { }
