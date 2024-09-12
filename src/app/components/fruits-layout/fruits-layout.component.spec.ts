import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsLayoutComponent } from './fruits-layout.component';

describe('FruitsLayoutComponent', () => {
  let component: FruitsLayoutComponent;
  let fixture: ComponentFixture<FruitsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
