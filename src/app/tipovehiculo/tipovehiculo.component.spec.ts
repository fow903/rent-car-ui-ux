import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovehiculoComponent } from './tipovehiculo.component';

describe('TipovehiculoComponent', () => {
  let component: TipovehiculoComponent;
  let fixture: ComponentFixture<TipovehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipovehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
