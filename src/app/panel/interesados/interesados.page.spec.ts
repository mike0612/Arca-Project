import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresadosPage } from './interesados.page';

describe('InteresadosPage', () => {
  let component: InteresadosPage;
  let fixture: ComponentFixture<InteresadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
