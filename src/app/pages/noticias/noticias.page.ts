import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  database = '/noticias/';
  noticias: any = [];

  constructor(
    private service: DatabaseService,
  ) {}

  ngOnInit() {
    this.service.getAllData(this.database).valueChanges().subscribe((res) => {
      this.noticias = res;
    });
  }

  ionViewDidEnter() {
    document.addEventListener('backbutton', function (e) { }, false);
  }

}
