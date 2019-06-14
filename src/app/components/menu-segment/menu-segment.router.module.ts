import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular';
import { AdoptaPage } from 'src/app/pages/adopta/adopta.page';

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
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes)
    ],
    declarations: [AdoptaPage]
  })
  export class MenuSegment {}