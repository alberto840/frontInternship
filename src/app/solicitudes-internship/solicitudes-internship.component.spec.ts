import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesInternshipComponent } from './solicitudes-internship.component';

describe('SolicitudesInternshipComponent', () => {
  let component: SolicitudesInternshipComponent;
  let fixture: ComponentFixture<SolicitudesInternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudesInternshipComponent]
    });
    fixture = TestBed.createComponent(SolicitudesInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
