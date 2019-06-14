import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  openDeatail(){
    this.modal.create({
      component:FormularioComponent
    }).then((modal) => modal.present())
  }
  closeDetail(){
    this.modal.dismiss()
  }
}
