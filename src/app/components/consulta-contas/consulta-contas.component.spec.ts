import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaContasComponent } from './consulta-contas.component';

describe('ConsultaContasComponent', () => {
  let component: ConsultaContasComponent;
  let fixture: ComponentFixture<ConsultaContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaContasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
