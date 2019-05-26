import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './componentes/registro/registro.module#RegistroPageModule' },
  { path: 'perfil', loadChildren: './componentes/perfil/perfil.module#PerfilPageModule' },
  { path: 'adopta', loadChildren: './componentes/adopta/adopta.module#AdoptaPageModule' },
  { path: 'es-tuyo', loadChildren: './componentes/es-tuyo/es-tuyo.module#EsTuyoPageModule' },
  { path: 'citas', loadChildren: './componentes/citas/citas.module#CitasPageModule' },
  { path: 'tips', loadChildren: './componentes/tips/tips.module#TipsPageModule' },
  { path: 'contacto', loadChildren: './componentes/contacto/contacto.module#ContactoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
