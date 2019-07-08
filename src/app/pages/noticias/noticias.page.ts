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
      this.noticias = res.sort(this.compare);
    });
  }

  compare(a, b) {
    if (a.id < b.id) { return 1; }
    if (a.id > b.id) { return -1; }
    return 0;
  }

  ionViewWillEnter() {
    document.addEventListener('backbutton', function (e) { }, false);
  }

}
