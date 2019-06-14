import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { DatabaseService } from './services/database.service';
import { TipComponent } from './components/tip/tip.component';
import { EsTuyoComponent } from './components/es-tuyo/es-tuyo.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { customTranslateLoader } from './components/translate';
import { NoticiasComponent } from './components/noticias/noticias.component';


@NgModule({
  declarations: [
    AppComponent,
    TipComponent,
    EsTuyoComponent,
    NoticiasComponent
  ],
  entryComponents: [
    TipComponent,
    EsTuyoComponent, 
    NoticiasComponent       
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    ComponentsModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
TranslateModule.forRoot({
     loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
     }
}),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },    
    AngularFireDatabase,  
    DatabaseService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

