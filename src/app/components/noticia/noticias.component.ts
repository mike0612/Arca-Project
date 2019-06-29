import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  database = '/noticias/';
  noticia: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DatabaseService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['n.id'];
    if (!id) { return; }
    this.service.getDataId(this.database, id).valueChanges().subscribe((res) => {
      this.noticia = res;
    });
  }

}
