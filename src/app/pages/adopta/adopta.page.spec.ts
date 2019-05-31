import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptaPage } from './adopta.page';

describe('AdoptaPage', () => {
  let component: AdoptaPage;
  let fixture: ComponentFixture<AdoptaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
