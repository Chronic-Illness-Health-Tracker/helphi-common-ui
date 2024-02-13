import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelphiSidebarComponent } from './helphi-sidebar.component';

describe('HelphiSidebarComponent', () => {
  let component: HelphiSidebarComponent;
  let fixture: ComponentFixture<HelphiSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelphiSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelphiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
