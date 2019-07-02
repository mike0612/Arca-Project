import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.page.html',
  styleUrls: ['./adopta.page.scss'],
})
export class AdoptaPage implements OnInit {

  database = '/mascotas/';
  mascotas: any = [];

  constructor(
    private service: DatabaseService,
  ) { }

  ngOnInit() {
    this.service.getFilterFieldValue(this.database,'status','Disponible').valueChanges().subscribe((res) => {
      this.mascotas = res;
    });
  }

}
