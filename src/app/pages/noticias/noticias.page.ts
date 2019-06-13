import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { ModalController } from '@ionic/angular';
import { NoticiasComponent } from 'src/app/components/noticias/noticias.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticias: any = [];
  data: string;


  constructor(
    private service: DatabaseService,
    private modal:ModalController,
   
  ) {
     }

  ngOnInit() {
    this.service.getNoticias().valueChanges().subscribe((noticias) => {
      this.noticias = noticias;
    })
  }

  openDetail(noticia){
    this.modal.create({
      component: NoticiasComponent,
      componentProps:{
        noticia:noticia
      }
    }).then((modal) => modal.present())
  }

}
