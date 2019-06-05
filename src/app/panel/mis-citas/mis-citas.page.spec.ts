import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCitasPage } from './mis-citas.page';

describe('MisCitasPage', () => {
  let component: MisCitasPage;
  let fixture: ComponentFixture<MisCitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCitasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
