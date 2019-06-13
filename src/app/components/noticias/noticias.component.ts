import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  data: any = [];
  noticia: any = [];

  constructor(
    private navParams: NavParams,
    private modal: ModalController,
    private service: DatabaseService
  ) { }

  ngOnInit() {
    this.data = this.navParams.get('noticia');
    this.service.getNoticia(this.data.id).valueChanges().subscribe(noticia => {
      this.noticia = noticia;
    })
  }

  closeDetail(){
    this.modal.dismiss()
  }

}
