import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ModalController } from '@ionic/angular';
import { EsTuyoComponent } from '../../components/es-tuyo/es-tuyo.component';

@Component({
  selector: 'app-es-tuyo',
  templateUrl: './es-tuyo.page.html',
  styleUrls: ['./es-tuyo.page.scss'],
})
export class EsTuyoPage implements OnInit {

  perdidos: any = [];
  data: string;

  search = [
    {id:1, tipo:"Todos", value:"all"},
    {id:2, tipo:"Caninos", value:"Canino"},
    {id:3, tipo:"Felinos", value:"Felino"}
  ]

  constructor(
    private service: DatabaseService,
    private modal:ModalController    
  ) { }

  ngOnInit() {   
    this.service.getPerdidos().valueChanges().subscribe((perdidos) => {
      this.perdidos = perdidos;
    })
  }

  searchTipo(){
    if(this.data == "all"){
      this.service.getPerdidos().valueChanges().subscribe((perdidos) => {
        this.perdidos = perdidos;        
      })
    }else{      
      this.service.getPerdidosfilter(this.data).valueChanges().subscribe((perdidos) => {
        this.perdidos = perdidos;        
      })
    }
  }

  openDeail(perdido){
    this.modal.create({
      component: EsTuyoComponent,
      componentProps:{
        perdido: perdido
      }     
    }).then((modal) => modal.present())
  }

}
