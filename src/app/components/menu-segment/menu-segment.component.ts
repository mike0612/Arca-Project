import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment} from '@ionic/angular';
import { Router } from '@angular/router';
import { NoticiasPage } from 'src/app/pages/noticias/noticias.page';


@Component({
  selector: 'app-menu-segment',
  templateUrl: './menu-segment.component.html',
  styleUrls: ['./menu-segment.component.scss'],
 

})

export class MenuSegmentComponent implements OnInit {

 


  @ViewChild(IonSegment) s: IonSegment;

  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }

  
  segmentChanged(event) {
  
    const page = event.detail.value;
    
 
    this.router.navigate([page]);
 
  }
  
}
