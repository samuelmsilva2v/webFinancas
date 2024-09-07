import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoContasComponent } from './edicao-contas.component';

describe('EdicaoContasComponent', () => {
  let component: EdicaoContasComponent;
  let fixture: ComponentFixture<EdicaoContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoContasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
