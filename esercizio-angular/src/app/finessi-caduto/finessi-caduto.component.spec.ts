import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinessiCadutoComponent } from './finessi-caduto.component';

describe('FinessiCadutoComponent', () => {
  let component: FinessiCadutoComponent;
  let fixture: ComponentFixture<FinessiCadutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinessiCadutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinessiCadutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
