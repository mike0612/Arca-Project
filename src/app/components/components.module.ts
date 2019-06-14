import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuSegmentComponent } from './menu-segment/menu-segment.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { customTranslateLoader } from './translate';
import { AdoptaPage } from '../pages/adopta/adopta.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu-segment',
    component: AdoptaPage,
    children: [
      {
        path: 'adopta',
        loadChildren: './pages/adopta/adopta.module#AdoptaPageModule'
      },
     
      
    ]
  },
  {
    path: '',
    redirectTo: 'menu-segment/adopta',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    MenuSegmentComponent,    
    [AdoptaPage]
  ],
  exports: [
    MenuSegmentComponent,    

  
  ],
  imports: [
    CommonModule, 
    IonicModule,   
    RouterModule.forChild(routes),
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
