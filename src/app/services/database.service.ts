import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db:AngularFireDatabase) {}

  /* --Es tuyo?-- */
  public getPerdidos() { return this.db.list('/perdidos/') }

  public getPerdidosfilter(filter) {
    return this.db.list('/perdidos/', tipo => tipo.orderByChild('tipo').equalTo(filter));
  }

  public getPerdido(id) { return this.db.object('/perdidos/' + id) }

  /* --Tips-- */
  public getTips(){ return this.db.list('/tips/') }

  public getTip(id){ return this.db.object('/tips/' + id) }

}