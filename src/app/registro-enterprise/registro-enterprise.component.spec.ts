import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEnterpriseComponent } from './registro-enterprise.component';

describe('RegistroEnterpriseComponent', () => {
  let component: RegistroEnterpriseComponent;
  let fixture: ComponentFixture<RegistroEnterpriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroEnterpriseComponent]
    });
    fixture = TestBed.createComponent(RegistroEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
