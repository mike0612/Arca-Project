import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adoptado',
  templateUrl: './adoptado.component.html',
  styleUrls: ['./adoptado.component.scss'],
})
export class AdoptadoComponent implements OnInit {
data:any = [];
adoptado: any = [];

  constructor(
    
    private modal: ModalController,
    private service: DatabaseService,
    private activateRoute:ActivatedRoute,
    private router:Router
  ) {

   }

  ngOnInit() {
    let id = this.activateRoute.snapshot.params['adoptado.id'];
    if(!id)return
    this.service.getAdoptado(id).valueChanges().subscribe(adoptado => {
      this.adoptado = adoptado;
    })
  }

  openDeatail(){
    this.modal.create({
      component:FormularioComponent
    }).then((modal) => modal.present())
  }

  openDetail(){
    
  }

  closeDetail(){
    // this.router.navigate[('adopta')];
  }

  test(adoptado){
    this.modal.create({
      component: FormularioComponent,
      componentProps:{
        adoptado: adoptado
      }
    }).then((modal) => modal.present())
  }

}
