import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { AdoptadoComponent } from 'src/app/components/adoptado/adoptado.component';
@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.page.html',
  styleUrls: ['./adopta.page.scss'],
})
export class AdoptaPage implements OnInit {
  adoptados: any = [];
  data: string;
  @ViewChild(IonSegment) s: IonSegment;


  constructor(
    private service: DatabaseService,
    private modal: ModalController
  ) { }

  ngOnInit() {
   this.service.getAdoptados().valueChanges().subscribe((adoptados) => {
     this.adoptados = adoptados;
   })
  }

  openDetail(adoptado){
    this.modal.create({
      component: AdoptadoComponent,
      componentProps:{
        adoptado:adoptado
      }
    }).then((modal) => modal.present())
  }

}
