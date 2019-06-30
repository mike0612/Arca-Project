import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptaFormPage } from './adopta-form.page';

describe('AdoptaFormPage', () => {
  let component: AdoptaFormPage;
  let fixture: ComponentFixture<AdoptaFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptaFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
