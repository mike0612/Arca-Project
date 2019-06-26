import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.page.html',
  styleUrls: ['./mis-citas.page.scss'],
})
export class MisCitasPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  volver(){
    this.router.navigate(['/adopta']);
  }
}
