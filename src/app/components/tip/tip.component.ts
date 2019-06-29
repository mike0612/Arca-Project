import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
})
export class TipComponent implements OnInit {

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
