import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptadosPage } from './adoptados.page';

describe('AdoptadosPage', () => {
  let component: AdoptadosPage;
  let fixture: ComponentFixture<AdoptadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
