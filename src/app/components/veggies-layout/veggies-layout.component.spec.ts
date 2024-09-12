import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggiesLayoutComponent } from './veggies-layout.component';

describe('VeggiesLayoutComponent', () => {
  let component: VeggiesLayoutComponent;
  let fixture: ComponentFixture<VeggiesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeggiesLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeggiesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
