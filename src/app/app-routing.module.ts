import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WithinGuard, NosessionGuard } from './security';
import { AdoptadoComponent } from './components/adoptado/adoptado.component';

const routes: Routes = [
  { path: '', redirectTo: 'adopta', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  { path: 'adopta', loadChildren: './pages/adopta/adopta.module#AdoptaPageModule' },
  { path: 'tips', loadChildren: './pages/tips/tips.module#TipsPageModule' },
  { path: 'tip/:t.id', loadChildren: './pages/tip-detail/tip-detail.module#TipDetailPageModule' },
  { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule' },
  { path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasPageModule' },
  { path: 'noticia/:n.id', loadChildren: './pages/noticia-detail/noticia-detail.module#NoticiaDetailPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'adoptados', loadChildren: './panel/adoptados/adoptados.module#AdoptadosPageModule' },
  { path: 'interesados', loadChildren: './panel/interesados/interesados.module#InteresadosPageModule' },
  { path: 'configuraciones', loadChildren: './panel/configuraciones/configuraciones.module#ConfiguracionesPageModule' },
  { path: 'acerca-de', loadChildren: './panel/acerca-de/acerca-de.module#AcercaDePageModule' },
  { path: 'denuncia', loadChildren: './pages/denuncia/denuncia.module#DenunciaPageModule' },
  { path: 'adoptadoDetail/:adoptado.id', component: AdoptadoComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
