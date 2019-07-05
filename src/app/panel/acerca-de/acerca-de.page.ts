import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatabaseService } from './../../services/database.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  logos: any = [];

  constructor(
    private translate: TranslateService,
    private dbService: DatabaseService
  ) { }

  ngOnInit() {
    this.dbService.getAllData('/movil/').valueChanges().subscribe((res) => {
      this.logos = res;
    });
  }

  ionViewWillEnter() {
    document.addEventListener('backbutton', function (e) { }, false);
  }

}
