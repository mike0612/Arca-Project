import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetailPage } from './noticia-detail.page';

describe('NoticiaDetailPage', () => {
  let component: NoticiaDetailPage;
  let fixture: ComponentFixture<NoticiaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
