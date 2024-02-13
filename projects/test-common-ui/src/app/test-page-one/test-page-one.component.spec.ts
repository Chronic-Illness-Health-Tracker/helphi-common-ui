import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPageOneComponent } from './test-page-one.component';

describe('TestPageOneComponent', () => {
  let component: TestPageOneComponent;
  let fixture: ComponentFixture<TestPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPageOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
