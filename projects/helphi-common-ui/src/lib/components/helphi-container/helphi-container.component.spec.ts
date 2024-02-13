import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelphiContainerComponent } from './helphi-container.component';

describe('HelphiContainerComponent', () => {
  let component: HelphiContainerComponent;
  let fixture: ComponentFixture<HelphiContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelphiContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelphiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
