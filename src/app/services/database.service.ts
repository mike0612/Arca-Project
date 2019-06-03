import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db:AngularFireDatabase) {}

  /* --Es tuyo?-- */
    

  /* --Tips-- */
  public getTips(){ return this.db.list('/tips/') }

  public getTip(id){ return this.db.object('/tips/' + id) }

}