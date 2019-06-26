import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WithinGuard } from './security/within.guard';
import { NosessionGuard } from './security/nosession.guard';
import { AdoptadoComponent } from './components/adoptado/adoptado.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate:[NosessionGuard] },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule', canActivate:[NosessionGuard] },
  { path: 'adopta', loadChildren: './pages/adopta/adopta.module#AdoptaPageModule', canActivate:[WithinGuard] },
  { path: 'es-tuyo', loadChildren: './pages/es-tuyo/es-tuyo.module#EsTuyoPageModule', canActivate:[WithinGuard] },  
  { path: 'citas', loadChildren: './pages/citas/citas.module#CitasPageModule', canActivate:[WithinGuard] },
  { path: 'tips', loadChildren: './pages/tips/tips.module#TipsPageModule', canActivate:[WithinGuard] },
  { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule', canActivate:[WithinGuard] },
  { path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasPageModule', canActivate:[WithinGuard] },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule', canActivate:[WithinGuard] },
  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule', canActivate:[WithinGuard] },
  { path: 'adoptados', loadChildren: './panel/adoptados/adoptados.module#AdoptadosPageModule', canActivate:[WithinGuard] },
  { path: 'interesados', loadChildren: './panel/interesados/interesados.module#InteresadosPageModule', canActivate:[WithinGuard] },
  { path: 'mis-citas', loadChildren: './panel/mis-citas/mis-citas.module#MisCitasPageModule', canActivate:[WithinGuard] },
  { path: 'configuraciones', loadChildren: './panel/configuraciones/configuraciones.module#ConfiguracionesPageModule', canActivate:[WithinGuard] },
  { path: 'acerca-de', loadChildren: './panel/acerca-de/acerca-de.module#AcercaDePageModule', canActivate:[WithinGuard] },
  { path: 'denuncia', loadChildren: './pages/denuncia/denuncia.module#DenunciaPageModule', canActivate:[WithinGuard]},
  { path: 'adoptadoDetail/:adoptado.id', component: AdoptadoComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
