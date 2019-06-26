import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adoptados',
  templateUrl: './adoptados.page.html',
  styleUrls: ['./adoptados.page.scss'],
})
export class AdoptadosPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  volver(){
    this.router.navigate(['/adopta']);
  }
}
