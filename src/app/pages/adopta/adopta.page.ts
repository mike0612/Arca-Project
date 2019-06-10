import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.page.html',
  styleUrls: ['./adopta.page.scss'],
})
export class AdoptaPage implements OnInit {
  @ViewChild(IonSegment) s: IonSegment;
  constructor() { }

  ngOnInit() {
   
  }

}
