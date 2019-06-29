import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipDetailPage } from './tip-detail.page';

describe('TipDetailPage', () => {
  let component: TipDetailPage;
  let fixture: ComponentFixture<TipDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
