import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonSegment) s: IonSegment;

  constructor() {}
 
  ngOnInit(){
    this.s.value = "noticias";
  }

  segmentChanged(event){    
  }

}