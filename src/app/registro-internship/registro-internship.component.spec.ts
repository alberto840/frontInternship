import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInternshipComponent } from './registro-internship.component';

describe('RegistroInternshipComponent', () => {
  let component: RegistroInternshipComponent;
  let fixture: ComponentFixture<RegistroInternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroInternshipComponent]
    });
    fixture = TestBed.createComponent(RegistroInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
