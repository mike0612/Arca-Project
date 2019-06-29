import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tip-detail',
  templateUrl: './tip-detail.page.html',
  styleUrls: ['./tip-detail.page.scss'],
})
export class TipDetailPage implements OnInit {

  database = '/tips/';
  tip: any = [];

  constructor(
    private service: DatabaseService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['t.id'];
    if (!id) { return; }
    this.service.getDataId(this.database, id).valueChanges().subscribe((res) => {
      this.tip = res;
    });
  }

}

