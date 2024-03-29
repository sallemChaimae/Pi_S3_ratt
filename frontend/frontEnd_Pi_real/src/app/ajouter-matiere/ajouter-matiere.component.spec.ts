import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMatiereComponent } from './ajouter-matiere.component';

describe('AjouterMatiereComponent', () => {
  let component: AjouterMatiereComponent;
  let fixture: ComponentFixture<AjouterMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMatiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
