import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenuncieComponent } from './denuncie.component';

describe('DenuncieComponent', () => {
  let component: DenuncieComponent;
  let fixture: ComponentFixture<DenuncieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DenuncieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DenuncieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
