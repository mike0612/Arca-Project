import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  { path: 'adopta', loadChildren: './pages/adopta/adopta.module#AdoptaPageModule' },
  { path: 'es-tuyo', loadChildren: './pages/es-tuyo/es-tuyo.module#EsTuyoPageModule' },
  { path: 'citas', loadChildren: './pages/citas/citas.module#CitasPageModule' },
  { path: 'tips', loadChildren: './pages/tips/tips.module#TipsPageModule' },
  { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule' },
  { path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule' },
  { path: 'adoptados', loadChildren: './panel/adoptados/adoptados.module#AdoptadosPageModule' },
  { path: 'interesados', loadChildren: './panel/interesados/interesados.module#InteresadosPageModule' },
  { path: 'mis-citas', loadChildren: './panel/mis-citas/mis-citas.module#MisCitasPageModule' },
  { path: 'configuraciones', loadChildren: './panel/configuraciones/configuraciones.module#ConfiguracionesPageModule' },
  { path: 'acerca-de', loadChildren: './panel/acerca-de/acerca-de.module#AcercaDePageModule' },

 
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
