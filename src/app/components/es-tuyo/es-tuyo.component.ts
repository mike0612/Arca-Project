import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-es-tuyo',
  templateUrl: './es-tuyo.component.html',
  styleUrls: ['./es-tuyo.component.scss'],
})
export class EsTuyoComponent implements OnInit {

  data: any = [];
  perdido: any = [];

  constructor(
    private navParams: NavParams,
    private modal: ModalController,
    private service: DatabaseService
  ) { 
    this.data = this.navParams.get('perdido');          
    this.service.getPerdido(this.data.id).valueChanges().subscribe(perdido => {
      this.perdido = perdido;
    })
  }

  ngOnInit() {
        
  }

  closeDeail(){
    this.modal.dismiss()
  }

}
