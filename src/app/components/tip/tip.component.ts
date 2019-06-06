import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
})
export class TipComponent implements OnInit {

  data: any = [];
  tip: any = [];

  constructor(
    private navParams: NavParams,
    private modal: ModalController,
    private service: DatabaseService
  ) { }

  ngOnInit() {  
    this.data = this.navParams.get('tip');      
    this.service.getTip(this.data.id).valueChanges().subscribe(tip => {
      this.tip = tip;      
    })
  }

  closeTip(){
    this.modal.dismiss()
  }



}
