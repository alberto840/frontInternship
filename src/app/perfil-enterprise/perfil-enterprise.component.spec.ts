import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEnterpriseComponent } from './perfil-enterprise.component';

describe('PerfilEnterpriseComponent', () => {
  let component: PerfilEnterpriseComponent;
  let fixture: ComponentFixture<PerfilEnterpriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilEnterpriseComponent]
    });
    fixture = TestBed.createComponent(PerfilEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
