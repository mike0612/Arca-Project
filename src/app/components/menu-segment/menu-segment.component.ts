import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-segment',
  templateUrl: './menu-segment.component.html',
  styleUrls: ['./menu-segment.component.scss'],
})

export class MenuSegmentComponent implements OnInit {


  @ViewChild(IonSegment) s: IonSegment;

  constructor(private router:Router) { }

  ngOnInit() {
 
  
  }

  segmentChanged(event){  
    const page = event.detail.value;
    console.log(page)
  }

  adopta(){
    this.router.navigate(['/adopta']);
  }
  estuyo(){
    this.router.navigate(['/es-tuyo']);
  }
  noticias(){
    this.router.navigate(['/noticias']);
  }
  citas(){
    this.router.navigate(['/citas']);
  }
  tips(){
    this.router.navigate(['/tips']);
  }
  denuncia(){
    this.router.navigate(['/denuncia']);
  }
  contacto(){
    this.router.navigate(['/contacto']);
  }
}
