import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {


  constructor(private service: DatabaseService) {      
  }

  ngOnInit() {    
    this.service.getTips().valueChanges().subscribe((tips) => {
      console.log(tips)
    })
  }

}
