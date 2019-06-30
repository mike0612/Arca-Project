import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptaDetailPage } from './adopta-detail.page';

describe('AdoptaDetailPage', () => {
  let component: AdoptaDetailPage;
  let fixture: ComponentFixture<AdoptaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
