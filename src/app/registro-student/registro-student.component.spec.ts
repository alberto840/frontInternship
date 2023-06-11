import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroStudentComponent } from './registro-student.component';

describe('RegistroStudentComponent', () => {
  let component: RegistroStudentComponent;
  let fixture: ComponentFixture<RegistroStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroStudentComponent]
    });
    fixture = TestBed.createComponent(RegistroStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
