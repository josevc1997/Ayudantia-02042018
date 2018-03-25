import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarEntradasComponent } from './ingresar-entradas.component';

describe('IngresarEntradasComponent', () => {
  let component: IngresarEntradasComponent;
  let fixture: ComponentFixture<IngresarEntradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarEntradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
