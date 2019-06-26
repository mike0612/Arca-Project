import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
// import { AdoptadoComponent } from 'src/app/components/adoptado/adoptado.component';
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
    private router: Router,
    // private modal: ModalController
  ) { }

  ngOnInit() {
   this.service.getAdoptados().valueChanges().subscribe((adoptados) => {
     this.adoptados = adoptados;
   })
  }

  openDetail(adoptado){
    this.router.navigate(['adoptadoDetail',adoptado.id]);
    console.log(adoptado.id)
    // this.modal.create({
    //   component: AdoptadoComponent,
    //   componentProps:{
    //     adoptado:adoptado
    //   }
    // }).then((modal) => modal.present())
  }

}
