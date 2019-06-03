import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
})
export class TipComponent implements OnInit {

  tip = [];

  constructor(
    private navParams: NavParams,
    private model: ModalController,
    private service: DatabaseService
  ) { }

  ngOnInit() {}

  


}
