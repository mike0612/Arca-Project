import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Component({
  selector: 'app-tip-detail',
  templateUrl: './tip-detail.page.html',
  styleUrls: ['./tip-detail.page.scss'],
})
export class TipDetailPage implements OnInit {

  database = '/tips/';
  tip: any = [];

  option = {
    share: true,
  };

  constructor(
    private service: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private photoviewer: PhotoViewer
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['t.id'];
    if (!id) { return; }
    this.service.getDataId(this.database, id).valueChanges().subscribe((res) => {
      this.tip = res;
    });
  }

  preview(data) {
    this.photoviewer.show(data.foto, data.titulo, this.option);
  }

}

