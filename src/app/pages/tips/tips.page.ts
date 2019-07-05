import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  tips: any = [];
  database = '/tips/';

  constructor( private service: DatabaseService ) {}

  ngOnInit() {
    this.service.getAllData(this.database).valueChanges().subscribe((res) => {
      this.tips = res;
    });
  }

  ionViewDidEnter() {
    document.addEventListener('backbutton', function (e) { }, false);
  }

}
