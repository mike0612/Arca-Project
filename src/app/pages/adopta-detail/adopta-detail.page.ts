import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adopta-detail',
  templateUrl: './adopta-detail.page.html',
  styleUrls: ['./adopta-detail.page.scss'],
})
export class AdoptaDetailPage implements OnInit {

  database = '/mascotas/';
  mascota: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DatabaseService,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['a.id'];
    if (!id) { return; }
    this.service.getDataId(this.database, id).valueChanges().subscribe((res) => {
      this.mascota = res;
    });
  }

  adopta() {
    this.router.navigate(['/adoptaform', this.mascota.id]);
  }

}
