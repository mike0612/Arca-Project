import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-adoptado',
  templateUrl: './adoptado.component.html',
  styleUrls: ['./adoptado.component.scss'],
})
export class AdoptadoComponent implements OnInit {
data:any = [];
adoptado: any = [];

  constructor(
    private navParams: NavParams,
    private modal: ModalController,
    private service: DatabaseService
  ) {
    this.data = this.navParams.get('adoptado');
    this.service.getAdoptado(this.data.id).valueChanges().subscribe(adoptado => {
      this.adoptado = adoptado;
    })
   }

  ngOnInit() {
   
  }

  openDeatail(){
    this.modal.create({
      component:FormularioComponent
    }).then((modal) => modal.present())
  }

  closeDetail(){
    this.modal.dismiss()
  }

}
