import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ModalController} from '@ionic/angular';
import { TipComponent } from '../../components/tip/tip.component';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  tips = [];

  constructor(
    private service: DatabaseService,
    private modal: ModalController    
  ) {}

  ngOnInit() {    
    this.service.getTips().valueChanges().subscribe((tips) => {
      this.tips = tips;  
    })
  }

  openTip(tip){
    this.modal.create({
      component: TipComponent,
      componentProps:{
        tip: tip
      }     
    }).then((modal) => modal.present())
  }

}
