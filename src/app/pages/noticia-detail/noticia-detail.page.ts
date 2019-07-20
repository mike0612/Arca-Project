import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.page.html',
  styleUrls: ['./noticia-detail.page.scss'],
})
export class NoticiaDetailPage implements OnInit {

  database = '/noticias/';
  noticia: any = [];

  option = {
    share: true,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DatabaseService,
    private photoviewer: PhotoViewer
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['n.id'];
    if (!id) { return; }
    this.service.getDataId(this.database, id).valueChanges().subscribe((res) => {
      this.noticia = res;
    });
  }

  preview(data) {
    this.photoviewer.show(data.foto, data.titulo, this.option);
  }

}
