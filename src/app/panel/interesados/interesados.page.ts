import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-interesados',
  templateUrl: './interesados.page.html',
  styleUrls: ['./interesados.page.scss'],
})
export class InteresadosPage implements OnInit {
  tips: any = [];
  constructor(
    private router: Router,
    private service: DatabaseService,
    private modal: ModalController
  ) { }

  ngOnInit() {

  }


  volver() {
    this.router.navigate(['/header/adopta']);
  }
}
