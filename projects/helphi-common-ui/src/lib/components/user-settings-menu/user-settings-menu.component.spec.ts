import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsMenuComponent } from './user-settings-menu.component';

describe('UserSettingsMenuComponent', () => {
  let component: UserSettingsMenuComponent;
  let fixture: ComponentFixture<UserSettingsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSettingsMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSettingsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
