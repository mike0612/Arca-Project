import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsTuyoPage } from './es-tuyo.page';

describe('EsTuyoPage', () => {
  let component: EsTuyoPage;
  let fixture: ComponentFixture<EsTuyoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsTuyoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsTuyoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
