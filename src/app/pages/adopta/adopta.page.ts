import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../../services';

@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.page.html',
  styleUrls: ['./adopta.page.scss'],
})
export class AdoptaPage implements OnInit {

  database = '/mascotas/';
  mascotas: any = [];

  private color = 'color1';

  constructor(
    private service: DatabaseService,
  ) { }

  ngOnInit() {
    this.service.getFilterFieldValue(this.database, 'status', 'Disponible').valueChanges().subscribe((res) => {
      this.mascotas = res;
    });
  }

  ionViewWillEnter() {
    document.addEventListener('backbutton', function (e) { }, false);
  }

}
