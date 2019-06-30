import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { }

  /*********************
  * obtener todos los datos
  **********************/
  public getAllData(database) {
    return this.db.list(database);
  }

  /*********************
  * Obtener por id
  **********************/
  public getDataId(database, id) {
    return this.db.object(database + id);
  }

  /*********************************
  * Filtrar por valores de campos
  * ejemplo:
  * base de datos-> campo = Valor
  * database     -> field = value
  *********************************/
  public getFilterFieldValue(database, field, value) {
    return this.db.list(database, result =>
      result.orderByChild(field).equalTo(value));
  }

  /*********************
  * Agregar
  **********************/
  public addNew(database, object) {
    return this.db.database.ref(database + object.id).set(object);
  }

  /*********************************/
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

}
