import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { }

  public getDenuncias() {
    return this.db.list('/denuncias/').valueChanges();
  }
  public saveDenuncia(denuncia) {
    let key = this.db.list('/denuncias/').push(denuncia).key;

    denuncia.id = key;
    this.db.database.ref('/denuncias/' + denuncia.id).set(denuncia);

  }
  public updateDenuncia(denuncia) {

    this.db.database.ref('/denuncias/' + denuncia.id).set(denuncia);
  }
  public getDenuncia(id) {
    return this.db.object('/denuncias/' + id).valueChanges();
  
  }



  /* --Verificar cuenta de usuario-- */
  public getUserEmail(mail) {
    return this.db.list('/tipoUsuarios/', email => email.orderByChild('email').equalTo(mail));
  }

  /* --Es tuyo?-- */
  public getPerdidos() { return this.db.list('/perdidos/') }

  public getPerdidosfilter(filter) {
    return this.db.list('/perdidos/', tipo => tipo.orderByChild('tipo').equalTo(filter));
  }

  public getPerdido(id) { return this.db.object('/perdidos/' + id) }

  /* --Tips-- */
  public getTips() { return this.db.list('/tips/') }

  public getTip(id) { return this.db.object('/tips/' + id) }

  /*--Noticias*/
  public getNoticias() { return this.db.list('/noticias/') }

  public getNoticia(id) { return this.db.object('/noticias/' + id) }

  /*--Adopta*/
  public getAdoptados() { return this.db.list('/mascotas/') }

  public getAdoptado(id) { return this.db.object('/mascotas/' + id) }


}