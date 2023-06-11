import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipDetalleComponent } from './internship-detalle.component';

describe('InternshipDetalleComponent', () => {
  let component: InternshipDetalleComponent;
  let fixture: ComponentFixture<InternshipDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternshipDetalleComponent]
    });
    fixture = TestBed.createComponent(InternshipDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
